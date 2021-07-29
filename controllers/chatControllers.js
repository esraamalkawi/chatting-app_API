const { Chat, UserChat } = require("../db/models");

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
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }

    const newChat = await Chat.create(req.body);
    const idsArry = req.body.users.map(
      (user) => (user = { userId: user, chatId: newChat.id })
    );

    UserChat.bulkCreate(idsArry);
    res.status(201).json(newChat);
  } catch (error) {
    next(error);
  }
};

exports.chatDelete = async (req, res, next) => {
  try {
    await req.chat.destroy();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
