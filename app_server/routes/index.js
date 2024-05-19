var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/Main');

/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;
