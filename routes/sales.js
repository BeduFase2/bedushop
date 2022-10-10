const router = require('express').Router();
const {
    createSale,
    getSale
} = require('../controllers/sales');
const auth = require('./auth');

/**
 * @openapi
 * /v1/sales:
 *   get:
 *     tags:
 *       - Sales
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */
router.get('/', auth.required, getSale)
router.post('/', auth.required, createSale)

module.exports = router;