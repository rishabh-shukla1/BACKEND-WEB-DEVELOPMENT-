const express=require('express')
const app=express()

const path=require('path') 


const todos=['heloo','my name','rishabh']


app.set('view engine','ejs')// view engine ko set kar dia  h

app.set('views',path.join(__dirname,'views'))
app.get('/',(req,res)=>{

    res.render('index')
})


app.get('/random',(req,res)=>{


    let number=Math.floor(Math.random()*100);
    res.render('random',{number})
})


app.get('/todo',(req,res)=>{

    res.render('todo',{todos})


})


app.listen(8080,()=>{
    console.log("server pe ho ")
})