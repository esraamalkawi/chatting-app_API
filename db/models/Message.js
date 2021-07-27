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
    return Message;
        }