const mongoose = require("mongoose");

const apinSchema = mongoose.Schema({
    name : {type:String,required:true},
    image : {type:String,required:true},
    specialization : {type:String,required:true},
    experience : {type:Number,required:true},
    location : {type:String,required:true},
    date : {type:String,required:true},
    slots : {type:Number,required:true},
    fee : {type:Number,required:true}

},{
    versionKey : false
})

const ApinModel = mongoose.model("appoinment",apinSchema);

module.exports = {ApinModel}


// {
//     "name": "Mark Johnson",
//     "image": "https://example.com/doctor-image.jpg",
//     "specialization": "Pediatrician",
//     "experience": 5,
//     "location": "Chicago",
//     "date": "2023-04-06T09:30:00.000Z",
//       "slots" : 1,
//     "fee": 100
//   }