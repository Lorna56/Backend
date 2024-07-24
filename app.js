const express = require('express')
const mongoose = require('mongoose')

const app = express();
const port = 8080

app.get('/', (req, res) =>{
    console.log(res.send('xndd'))
    

})
 
app.listen(port,()=>{
console.log(`server runing on port ${port}`)
})

//CONNECT TO THE DATABASE
mongoose.connect("mongodb+srv://CodeQueen:Lornajesty@cluster0.woggvkl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    // {useNewUrlParser:true}
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