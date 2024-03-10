const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,default:""},
    gender:{type:String,default:""},
    address:{type:Array,default:""},
    createdAt:{type:Date,default:Date.now},

})

schema.index({name:1})

module.exports = mongoose.model('userSchema',schema,'userSchema')