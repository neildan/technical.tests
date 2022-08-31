const router = require('express').Router()
const { check, validationResult } = require('express-validator')
const trait = require('../trait')
const { Account} = require('../../db');

/**
 * Create a account
 */
router.post('/', [
    check('typeAccount', 'Tipo de cuenta debe ser obligatorio').not().isEmpty(),
    check('amount', 'Cantidad dinero debe ser obligatorio').not().isEmpty().isLength({ min: 4 }),
], async(req, res) => {
    try {
        let errors = validationResult(req)
        if (!errors.isEmpty()) throw { data: errors, msj: 'Error Validation' }
        req.body.numberAccount = Math.floor(Math.random() * 999999999) + 111111111;
        let account = await Account.create(req.body)
        res.json(trait.success(account, 'ok'))
    } catch (e) {
        res.json(trait.error(e.data, e.msj))
    }
})

module.exports = router