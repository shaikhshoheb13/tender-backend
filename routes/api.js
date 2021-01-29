var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var Tender = require('../models/tender')


router.post('/tender-add', function(req,res){
    
    Tender.create(req.body, function (err, post) {
        
        if(err){
            console.log("Inside api=== After create", JSON.stringify(req.body), err);
            return res.json(err);
        } else {
            
            res.status(200).send({ msg: 'Tender saved.' });
        }

    })
    
})

router.get('/getTenders', function(req, res, next) {
    Tender.find({}, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      });
});

router.post('/tender-delete',function(req,res,next){
    // var newProduct=req.body;
    console.log("req body =========",req.body);
    Tender.deleteOne({_id:req.body._id}).exec(function(err,response){
        if(err){
          //console.log("Error in updating=="+JSON.stringify(err));
            return res.json(err)
            
        }else{
            res.json(response);
            console.log("Successfully Deleted!")
        }
    })
})

module.exports = router;