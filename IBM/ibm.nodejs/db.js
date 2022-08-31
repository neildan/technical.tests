const Sequelize = require('sequelize')

const UserModel = require('./models/users')
const TransactionModel = require('./models/transactions')
const AccountModel = require('./models/accounts')

const sequelize = new Sequelize('dbonlinedaniel', 'dbonlinedaniel', 'dbonlinedaniel', {
    host: 'db4free.net',
    dialect: 'mysql',
    logging: false
})

const User = UserModel(sequelize, Sequelize)
const Transaction = TransactionModel(sequelize, Sequelize)
const Account = AccountModel(sequelize, Sequelize)

sequelize.sync({
    force: false
}).then(() => {
    console.log("Tablas sincronizadas")
})

module.exports = {
    User,
    Transaction,
    Account
}