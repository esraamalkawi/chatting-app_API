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
         SequelizeSlugify.slugifyModel(message, {
          source: ["name"],
        });
        
        message.associate = (models) => {
          models.Chat.hasMany(message,{foreignKey: "chatId",as: "message",allowNull: false});
          message.belongsTo(models.Chat,{foreignKey:"chatId"})
        };
        
    return Message;

     
        }

