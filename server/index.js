import express from 'express'
const app = express()
const port = 3000
app.get('/',(req,res)=>{
    res.send('hello world')
})
console.log('hello');
app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})