let mongoose = require('mongoose');

module.exports=mongoose.model('service',{
    ServiceName:{
        type:String
    }
})