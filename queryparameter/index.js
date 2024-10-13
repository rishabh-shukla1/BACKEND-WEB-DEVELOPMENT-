
const express=require('express')
const app=express()


app.get('/search',(req,res)=>{

   console.log( req.query)
   console.log(req.query.search)
   let {search }=req.query //destructure

   console.log(search);
//    res.send(`${search}`)

//    res.send(search)

   res.send(req.query.search)



})


app.listen(8080,()=>{
    console.log('mera server chal  gaya h ');
})