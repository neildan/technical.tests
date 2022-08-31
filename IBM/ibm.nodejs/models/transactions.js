const sequalize = require('sequelize');

module.exports = (sequelize, type) => {
    const Transaction = sequelize.define('transaction', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        amount: {
            type: type.FLOAT,
            allowNull: false,
        },
        typeTransaction: {
            type: type.STRING,
            allowNull: false,
        },
        date: {
            type: type.DATE,
            allowNull: false,
        }
    });
    return Transaction;
};