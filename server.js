const express=require('express')
const app=express()
const mongoose=require('mongoose')


app.use(express.json())

mongoose.connect('mongodb://127.0.0.1/myPortpolio')
.then(()=>{
    console.log('db connected')
})
.catch((err)=>{
    console.log(err)
})



app.listen(3000,()=>{
    console.log('server started')
})