var express = require('express');
var router = express.Router();
let controller = require("../controllers/indexControllers");

/* GET home page. */
router.get('/', controller.index);

module.exports = router;
