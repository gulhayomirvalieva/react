module.exports = (sequelize, Datatypes) => {
    const Like = sequelize.define("Like", {
        id: {
            type: Datatypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: Datatypes.INTEGER,
            allowNull: false,
        },
        card_id: {
            type: Datatypes.INTEGER,
            allowNull: false,
        },
    })

    Like.associate = models => {
        // 1-Like modelga <= User modeldan kelishi
        Like.belongsTo(models.User, {
            foreignKey: "user_id",
            as: "user"
        })
        // 2-Like modelga <= Card modeldan kelishi
        Like.belongsTo(models.Card, {
            foreignKey: "card_id",
            as: "card"
        })
    }

    return Like
};