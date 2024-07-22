const express = require('express')


const app = express();
const port = 8080

app.get('/', (req, res) =>{
    console.log(res.send('xndd'))
    

})
 
app.listen(port,()=>{
console.log(`server runing on port ${port}`)
})

// function student (req, res){
//console.log(req+res)
//}

//const students =(req, res)=>{console.log (req+res)}

//(req,res)=>{console.log(req+res)}