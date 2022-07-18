const router = require('express').Router();
const { User } = require('../../db')
const trait = require('../trait')

/**
 * Get a user
 */
router.get('/:userId', async(req, res) => {
    try {
        let user = await User.findOne({ where: { id: req.params.userId } })
        if (!user) throw { data: {}, msj: 'El usuario no existe' }
        res.json(trait.success(user, 'ok'))
    } catch (e) {
        res.json(trait.error(e.data, e.msj))
    }
})

module.exports = router