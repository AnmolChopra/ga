let mongoose = require('mongoose');

module.exports=mongoose.model('models',{
    BrandName:{
        type:String
    },
    ModelNo:{
        type:String
    }
})