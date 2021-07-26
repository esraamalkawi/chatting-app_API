module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define("Message", {
      input: {
        type: DataTypes.STRING,
        allowNull: false,
      },
         });
    return Message;
      }
