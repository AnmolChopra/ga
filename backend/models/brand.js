let mongoose = require('mongoose');

module.exports=mongoose.model('brand',{
    BrandName:{
        type:String
    }
})