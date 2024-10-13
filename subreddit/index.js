
let express=require('express')
let app=express();

// app.get('/',(req,res)=>{
//     resizeBy.send('root route hai')
// })
// app.get('/r/bananna',(req,res)=>{
//    res.send("banana") 
// })


// app.get('/r/apple',(req,res)=>{
//     res.send("apple") 
//  })


 //aise to hazaro  routes banane pad jaege



 app.get('/r/:subreddit',(req,res)=>{
    

   console.log( req.params);
// destructure
   let { subreddit} = req.params;

   res.send(`my roUTE IS ${subreddit}`)


 })
 




app.listen(8080,()=>{console.log("Server pe ho")})