module.exports = (sequelize, DataTypes) => {
  const UserChat = sequelize.define("UserChat", {});

  UserChat.associate = (models) => {
    models.User.belongsToMany(models.Chat, {
      through: UserChat,
      foreignKey: "userId",
      onDelete: "cascade",
    });
    models.Chat.belongsToMany(models.User, {
      through: UserChat,
      foreignKey: "chatId",
      onDelete: "cascade",
    });
  };

  return UserChat;
};
