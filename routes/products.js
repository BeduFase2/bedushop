const router = require('express').Router();
const {
    createProduct,
    getAllProducts,
    getAllProductsBySeller,
    getProductById,
    updateProduct,
    deleteProduct
} = require('../controllers/products')

/**
 * @openapi
 * /v1/products:
 *   get:
 *     tags:
 *       - Products
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
router.get('/', getAllProducts)

/**
* @openapi
* paths:
*   /v1/products:
*     post:
*       tags:
*         - Products
*       summary: Add a new product
*
*       requestBody:
*         description: Product data
*         required: true
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 name:
*                   type: string
*                   example: Nike Air Force 1
*                 price:
*                   type: number
*                   example: 142.50
*                 category:
*                   type: string
*                   example: Sneakers
*                 description:
*                   type: string
*                   example: Nike Air Force 1
*           text/plain:
*             schema:
*               type: string
*
*       responses:
*         '201':
*           description: Created
*/
router.post('/', createProduct)

/**
* @openapi
* /v1/products/seller/{sellerId}:
*   get:
*     tags:
*       - Products
*     summary: Get a product by seller ID
*     parameters:
*       - in: path
*         name: sellerId
*         schema:
*           type: integer
*           required: true
*           description: Numeric ID of the seller to get
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
router.get('/seller/:id',getAllProductsBySeller)

/**
* @openapi
* /v1/products/{productId}:
*   get:
*     tags:
*       - Products
*     summary: Get a product by product ID
*     parameters:
*       - in: path
*         name: productId
*         schema:
*           type: integer
*           required: true
*           description: Numeric ID of the product to get
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
router.get('/:id', getProductById)

/**
* @openapi
* paths:
*   /v1/products/{productId}:
*     put:
*       tags:
*         - Products
*       summary: Update a product
*       parameters:
*         - in: path
*           name: productId
*           schema:
*             type: integer
*             required: true
*             description: Numeric ID of the product to get
*
*       requestBody:
*         description: Product data
*         required: true
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 name:
*                   type: string
*                   example: Nike Air Force 1
*                 price:
*                   type: number
*                   example: 142.50
*                 category:
*                   type: string
*                   example: Sneakers
*                 description:
*                   type: string
*                   example: Nike Air Force 1
*           text/plain:
*             schema:
*               type: string
*
*       responses:
*         '201':
*           description: Created
*/
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router;