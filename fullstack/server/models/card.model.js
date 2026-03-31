module.exports = (sequelize, Datatypes) => {
    const Card = sequelize.define("Card", {
        id: {
            type: Datatypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        description: {
            type: Datatypes.STRING,
        },
    })

    Card.associate = models => {
        // 2-Card model dan => Like modelga
        Card.hasMany(models.Like, {
            foreignKey: "card_id",
            as: "card_likes",
        })
    }
    return Card
};