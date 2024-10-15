

const express=require('express')// function 
const app=express();// objext or instance

// adding app.use()

// app.use((req,res)=>{//call back function
//     // console.log(req);
//     // console.log(res) ;
//     console.log("You made a request");
//     res.send('<h1>mummy meri shadi karwado </h1>')
// })



app.use('/middleware',(req,res)=>{//call back function
    // console.log(req);
    // console.log(res) ;
    console.log("You made a request");
    res.send('<h1>Hello </h1>')
})

app.listen(8080,()=>console.log('server connected to port 8080'))
