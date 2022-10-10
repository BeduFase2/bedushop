const router = require('express').Router();
const {
    createReview,
    getAllReviews,
    getReviewById,
    updateReview,
    deleteReview
} = require('../controllers/review')

router.get('/', getAllReviews)
router.post('/', createReview)
router.get('/:productID&:saleID',getReviewById)
router.put('/:productID&:saleID', updateReview)
router.delete('/:productID&:saleID', deleteReview)

module.exports = router;