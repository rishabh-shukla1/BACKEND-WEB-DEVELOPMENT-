const express=require('express')

const app=express();

const path=require('path');

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))//templating file

app.use(express.static(path.join(__dirname,'/public')))// static files ke lie
app.use(express.urlencoded({extended:true})) // to get the form data it is the middle ware

app.use(express.json())

app.get('/',(req,res)=>{
    
         
    res.render('index')
})



app.post('/user',(req,res)=>
{

    console.log(req.body)
    res.send('post pe send ki ha')
})

app.get('/user',(req,res)=>{

    console.log(req.query)
    let{username,age}=req.query;

    console.log(username)
    console.log(age)
    res.send('get request sent successfully')
})


app.listen(8080,()=>{
    console.log("server pe ho")
})