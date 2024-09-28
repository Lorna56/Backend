const express = require('express')

const router = express.Router()
const Posts = require('./postSchema.js')
// CRUD
//GET METHOD

// router.get('/posts', (req,res)=>
    
    // const onePost = await Posts.findById(req.params.postID)
    

        



router.get('/posts/:ID', async(req,res)=>{
    try{
        const onePost = await Posts.findById(req.params.postID)
    }
    res.json(
        {msg:'GET a specific post'}
    )
})
router.post('/posts', async(req,res)=>{
    const post = new Posts({
        postTitle :req.body.postTitle,
        postNumber :req.body.postNumber,
        postContent :req.body.postContent
    })
    try{
        const savedPost = await post.save()
        res.json({savedpost})
    }
    catch(err){
        res.json( {msg:err})

    }
    
})
router.delete('/deletePost/:id', async(req,res)=>{
    try{
        const deletePost = await Posts.remove({id:req.params.id})

    }
    catch(err){
        res.json({mesg:err})
    }
})

/** 
 * router.%method%()


module.exports= router