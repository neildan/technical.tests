const router = require('express').Router()

const middlewareToken = require('../middlewares/token')
const middlewareAdmin = require('../middlewares/admin')

const apiAuthRouter = require('./api/auth')
const apiUsersRouter = require('./api/users')
const apiTransactionsRouter = require('./api/transactions')
const apiAccountsRouter = require('./api/accounts')

router.use('/auth', apiAuthRouter)
router.use('/users', [middlewareToken.ckeckToken, middlewareAdmin.checkAdmin], apiUsersRouter)
router.use('/transactions', [middlewareToken.ckeckToken, middlewareAdmin.checkAdmin], apiTransactionsRouter)
router.use('/accounts', [middlewareToken.ckeckToken, middlewareAdmin.checkAdmin], apiAccountsRouter)
module.exports = router