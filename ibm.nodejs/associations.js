const { User, Transaction, Account } = require('./db')

Account.hasMany(Transaction);
Transaction.belongsTo(Account);

User.hasMany(Account);
Account.belongsTo(User);