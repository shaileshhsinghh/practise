const express = require('express');
const router = express.Router();
const {testingmiddleware,createusermiddleware} = require('../middlewares/UserMiddlewares');

router.get('/test',testingmiddleware);

router.get('/create',createusermiddleware);

module.exports = router; 