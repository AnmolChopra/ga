let mongoose = require('mongoose');

module.exports=mongoose.model('user',{
    personName:{
        type:String
    },
    MobileNo:{
        type:Number
    },
    BrandName:{
        type:String
    },
    ModelNo:{
        type:String
    },
    serviceName:{
        type:String
    },
    Inventory:{
        type:String
    },
    cost:{
        type:Number
    }
})