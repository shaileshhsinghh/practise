const express = require('express');
const router = express.Router();
const {testingmiddleware,createusermiddleware,loginmiddleware} = require('../middlewares/UserMiddlewares');

router.get('/test',testingmiddleware);

router.post('/create',createusermiddleware);

router.post('/login',loginmiddleware);

module.exports = router; 