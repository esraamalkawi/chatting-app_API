const SequelizeSlugify = require("sequelize-slugify");
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define("Message", {
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    received: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
  SequelizeSlugify.slugifyModel(Message, {
    source: ["name"],
  });

  Message.associate = (models) => {
    models.Chat.hasMany(Message, {
      foreignKey: "chatId",
      as: "message",
      allowNull: false,
    });
    Message.belongsTo(models.Chat, { foreignKey: "chatId" });
  };

  return Message;
};
