const router = require('express').Router();
const {
    createSale,
    getAllSales,
    getSaleById,
    getSalesBySeller,
    deleteWholeSale
} = require('../controllers/sale')

/**
 * @openapi
 * /v1/sale:
 *   get:
 *     tags:
 *       - Sale
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
router.get('/', getAllSales)

/**
* @openapi
* paths:
*   /v1/sale:
*     post:
*       tags:
*         - Sale
*       summary: Add a new sale
*
*       requestBody:
*         description: Sale data
*         required: true
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 productID:
*                   type: number
*                   example: 1
*                 sellerID:
*                   type: number
*                   example: 1
*                 buyerID:
*                   type: number
*                   example: 1
*                 quantity:
*                   type: number
*                   example: 1
*           text/plain:
*             schema:
*               type: string
*
*       responses:
*         '201':
*           description: Created
*/
router.post('/', createSale)
router.get('/seller/:id',getSalesBySeller)
router.get('/:id', getSaleById)
router.delete('/:id', deleteWholeSale)

module.exports = router;