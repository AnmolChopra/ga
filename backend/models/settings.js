let mongoose = require('mongoose');

module.exports=mongoose.model('settings',{
    InventoryLink:{
        type:Boolean
    }
})