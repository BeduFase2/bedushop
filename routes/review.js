const router = require('express').Router();
const {
    createReview,
    getAllReviews,
    getReviewById,
    updateReview,
    deleteReview
} = require('../controllers/review')

/**
 * @openapi
 * /v1/review:
 *   get:
 *     tags:
 *       - Review
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
router.get('/', getAllReviews)

/**
* @openapi
* paths:
*   /v1/review:
*     post:
*       tags:
*         - Review
*       summary: Add a new review
*
*       requestBody:
*         description: Review data
*         required: true
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 productID:
*                   type: number
*                   example: 1
*                 saleID:
*                   type: number
*                   example: 1
*                 comment:
*                   type: string
*                   example: Excelente producto
*           text/plain:
*             schema:
*               type: string
*
*       responses:
*         '201':
*           description: Created
*/
router.post('/', createReview)

/**
* @openapi
* /v1/review/{productId}/{saleId}:
*   get:
*     tags:
*       - Review
*     summary: Get a product by sale and product ID
*     parameters:
*       - in: path
*         name: productId
*         schema:
*           type: integer
*           required: true
*           description: Numeric ID of the product to get
*         name: saleId
*         schema:
*           type: integer
*           required: true
*           description: Numeric ID of the sale to get
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
router.get('/:productID&:saleID',getReviewById)
router.put('/:productID&:saleID', updateReview)
router.delete('/:productID&:saleID', deleteReview)

module.exports = router;