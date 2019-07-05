const express = require('express');
const postController = require('../controller/post');

const router = express.Router();

router.get('/', postController.getPosts);
router.post('/create', postController.createPost);

module.exports = router;