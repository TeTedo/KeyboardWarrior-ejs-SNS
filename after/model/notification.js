const Sequelize = require("sequelize");

class Notification extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: Sequelize.STRING(16),
          allowNull: false,
        },
        opponent_id: {
          type: Sequelize.STRING(16),
          allowNull: false,
        },
        what: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        check: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        where: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        game_name: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        post_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize: sequelize,
        timestamps: true,
        underscored: true,
        modelName: "Notification",
        tableName: "Notifications",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.Notification.belongsTo(db.User, {
      foreignKey: "user_id",
      targetKey: "user_id",
    });
  }
}

module.exports = Notification;
