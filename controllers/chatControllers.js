const { Chat } = require("../db/models");

exports.fetchChat = async (chatId, next) => {
  try {
    const foundChat = await Chat.findByPk(chatId);
    return foundChat;
  } catch (error) {
    next(error);
  }
};

exports.chatList = async (req, res, next) => {
  try {
    const chat = await Chat.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(chat);
  } catch (error) {
    next(error);
  }
};

exports.chatCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/${req.file.path}`;
    }
    req.body.userId = req.user.id;
    const newChat = await Chat.create(req.body);
    res.status(201).json(newChat);
  } catch (error) {
    next(error);
  }
};

exports.chatDelete = async (req, res, next) => {
  try {
    if (req.chat.userId === req.user.id) {
      await req.chat.destroy();
      res.status(204).end();
    } else {
      next({
        status: 401,
        message: "unautharized",
      });
    }
  } catch (error) {
    next(error);
  }
};
