// Create web server

// Import express
const express = require('express');
const router = express.Router();

// Import controller
const commentsController = require('../controllers/comments');

// Import middleware
const auth = require('../middleware/auth');

// Create route
router.post('/comments', auth, commentsController.createComment);
router.get('/comments', auth, commentsController.getAllComments);
router.get('/comments/:id', auth, commentsController.getOneComment);
router.put('/comments/:id', auth, commentsController.modifyComment);
router.delete('/comments/:id', auth, commentsController.deleteComment);

// Export route
module.exports = router;