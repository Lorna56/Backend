const mongoose = require('mongoose')
// SCHEMA - definition of a structure of a data
// it is going to be stored and accessed
const postSchema = new mongoose.Schema({

    postTitle:{
        type:String,
        required:true
    }, 

    postNumber:{
        type:number,

    },

    postContent:{
        type:String
        required:true
    }

})

module.exports = mongoose.model ('posts', postsSchema)