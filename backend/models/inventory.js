let mongoose = require('mongoose');

module.exports=mongoose.model('Inventory',{
    ServiceName:{
        type:String
    },
    inventoryName:{
        type:String
    }
})