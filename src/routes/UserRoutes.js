const express = require('express');
const router = express.Router();
const {testingmiddleware,createusermiddleware,loginmiddleware,createtodomiddleware} = require('../middlewares/UserMiddlewares');

router.get('/test',testingmiddleware);

router.post('/create',createusermiddleware);

router.post('/login',loginmiddleware);

router.post('/createtodo',createtodomiddleware);

module.exports = router; 