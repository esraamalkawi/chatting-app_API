const { Message } = require("../db/models");

exports.fetchMessage = async (messageId, next) => {
  try {
    const foundMessage = await Message.findByPk(messageId);
    return foundMessage;
  } catch (error) {
    next(error);
  }
};


exports.messageList = async (req, res, next) => {
    try {
      const message = await Message.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      res.json(message);
    } catch (error) {
      next(error);
    }
  };

exports.messageCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/${req.file.path}`;
    }
    // req.body.userId = req.user.id;
    const newMessage = await Message.create(req.body);
    res.status(201).json(newMessage);
  } catch (error) {
    next(error);
  }
};

exports.messageDelete = async (req, res, next) => {
  try {
    await req.message.destroy();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.messageUpdate = async (req, res, next) => {
    try {
    //   if (req.shop.userId === req.user.id) {
        if (req.file) {
          req.body.image = `http://${req.get("host")}/${req.file.path}`;
        }
        await req.message.update(req.body);
        res.status(201).json(req.message);
    //   } else {
    //     next({
    //       status: 401,
    //       message: "unautharized",
    //     });
    //   }
    } catch (error) {
      next(error);
    }
  };