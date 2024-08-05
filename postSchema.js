const mongoose = require('mongoose')
// SCHEMA - definition of a structure of a data
// it is going to be stored and accessed
const postSchema = new mongoose.Schema({

    postTitle:{
        type:String,
        required:true
    }, 

    postNumber:{
        type:Number

    },

    postContent:{
        type:String,
        required:true
    }

}, {timestamps:true})

module.exports = mongoose.model ('posts', postSchema)