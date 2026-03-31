const bcrypt = require("bcrypt");

module.exports = (sequelize, Datatypes) => {
    const User = sequelize.define("User", {
        id: {
            type: Datatypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userName: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        role: {
            type: Datatypes.ENUM("user", "admin"),
            defaultValue: "user"
        },
    })

    User.beforeSave(async user => {
        if (user.changed("password")) {
            user.password = await bcrypt.hash(user.password, 10)
        }
    })

    User.associate = models => {
        // 2-User model dan => Like modelga ketishi
        User.hasMany(models.Like, {
            foreignKey: "user_id",
            as: "user_like",
        })
    }

    return User
};