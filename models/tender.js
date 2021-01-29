var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var TenderSchema = new mongoose.Schema({
      
    // selling_price_id:[{type:String}],
     tenderId: {type: String, default: ""},
     tenderType: { type: String, enum: ['open', 'limited'] },
     tenderName: { type: String,default: "" },
})

// TenderSchema.plugin(uniqueValidator);
module.exports = mongoose.model('tenders', TenderSchema);