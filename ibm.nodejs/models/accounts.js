const sequalize = require('sequelize');

module.exports = (sequelize, type) => {
    const Account = sequelize.define('account', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        numberAccount: {
            type: type.STRING,
            allowNull: false,
        },
        typeAccount: {
            type: type.STRING,
            allowNull: false,
        },
        amount: {
            type: type.FLOAT,
            allowNull: false,
        }
    });
    return Account;
};