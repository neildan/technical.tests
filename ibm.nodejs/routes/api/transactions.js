const router = require('express').Router()
const { check, validationResult } = require('express-validator')
const trait = require('../trait')
const { Transaction, Account } = require('../../db');

/**
 * Get all transactions
 */
router.get('/:id', async (req, res) => {
    let response = await Transaction.findAll({ where: { accountId: req.body.id } })
    res.json(trait.success(response.data, 'ok'))
})

/**
 * Create a transaction
 */
router.post('/', [
    check('accountId', 'Es obligatorio el número de cuenta').not().isEmpty().isLength({ min: 1 }),
    check('amount', 'La cantidad a transferir es obligatoria').not().isEmpty(),
    check('typeTransaction', 'El tipo de transacción es obligatoria').not().isEmpty()
], async (req, res) => {
    try {
        let errors = validationResult(req)
        if (!errors.isEmpty()) throw { data: errors, msj: 'Error Validation' }
        let account = await Account.findOne({ where: { id: req.body.accountId } })
        if (!account) throw { data: {}, msj: 'La cuenta no existe' };
        req.body.date = Date.now();
        let reqAccount = { body: {} };
        if (req.body.typeTransaction == 'abono') {
            reqAccount.body.amount = parseFloat(account.amount) + parseFloat(req.body.amount);
        } else if (req.body.typeTransaction == 'retiro') {
            reqAccount.body.amount = parseFloat(account.amount) - parseFloat(req.body.amount);
            if (reqAccount.body.amount < 0) throw { data: {}, msj: 'No se puede hacer retiros por un monto mayor a: ' + parseFloat(account.amount) };
        } else {
            throw { data: {}, msj: 'Tipo de transacción invalido' };
        }
        let transaction = await Transaction.create(req.body);
        if (transaction.id <= 0) throw { data: {}, msj: 'No se realizo la transacción' };
        await Account.update(reqAccount.body, {
            where: { id: req.body.accountId }
        })
        res.json(trait.success(transaction, 'ok'))
    } catch (e) {
        res.json(trait.error(e.data, e.msj))
    }
})

module.exports = router