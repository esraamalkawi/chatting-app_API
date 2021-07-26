module.exports = (sequelize, DataTypes) => {
    const Chat = sequelize.define("Chat", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
          type: DataTypes.STRING,
          allowNull: true,
      }, 
      createdAt: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
      },
    updatedAt: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
      },
    });
    return Chat;
      }