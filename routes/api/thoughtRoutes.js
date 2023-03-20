const router = require('express').Router();
const {
  getThoughts,
  // getSingleComment,
  // createComment,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts);
// .post(createComment);

// /api/comments/:commentId
// router.route('/:commentId').get(getSingleComment);

module.exports = router;
