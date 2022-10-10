const router = require('express').Router();
const {
    createUser,
    getUser,
    updateUser,
    deleteUser,
    login
} = require('../controllers/users')
const auth = require('./auth');

/**
 * @openapi
 * /v1/user:
 *   get:
 *     tags:
 *       - User
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
router.get('/', auth.required, getUser)

/**
* @openapi
* paths:
*   /v1/user:
*     post:
*       security:
*         - BearerAuth: []
*       tags:
*         - User
*       summary: Add a new user
*
*       requestBody:
*         description: User data
*         required: true
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 username:
*                   type: string
*                   example: jdoe
*                 password:
*                   type: string
*                   example: abCD1425
*           text/plain:
*             schema:
*               type: string
*
*       responses:
*         '201':
*           description: Created
*/
router.post('/', createUser)
router.post('/login', login)
router.put('/', auth.required, updateUser)
router.delete('/', auth.required, deleteUser)

module.exports = router;