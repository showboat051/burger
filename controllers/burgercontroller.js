var express = require("express");
var router = express.Router();
// var burger = require ("../models/burger");
router.get('/', function(req,res){
    res.send('HOME SCREEN')
})

module.exports = router;