let mongoose = require('mongoose');

module.exports=mongoose.model('login',{
    UserName:{
        type:String
    },
    Password:{
        type: String
    },
    date:{
        type:Date.now()
    }
})