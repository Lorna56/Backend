const { config } = require('dotenv');
const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')

const app = express();
const port = 8080

const route = require('./routes')

// app.use('/posts', postRoute)
// use - middleware

app.use('/api',route)

app.get('/', (req, res) =>{
    console.log(res.send('xndd'))
    

})

 
app.listen(process.env.PORT,()=>{
console.log(`Connected to port ${process.env.port}`)
})

//CONNECT TO THE DATABASE
mongoose.connect(process.env.MONGODBLINK
    //  {useNewUrlParser:true}
    // parsing error 
    
).then(
    ()=>{console.log('Connected to the DB')}

).catch(err=>{
    console.log('Error connecting to the DB', err)
})


// function student (req, res){
//console.log(req+res)
//}

//const students =(req, res)=>{console.log (req+res)}

//(req,res)=>{console.log(req+res)}