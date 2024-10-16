
const express=require('express')

const app=express();

const path=require('path');
const methodOverride = require('method-override')


const { v4: uuid } = require('uuid');
uuid();



let comments=[
{
    // id:0,
    id:uuid(),
    username:"Akshay",
    comment:"Kuch nahi ",
},
{
    // id:1,
    id:uuid(),
    username:"sachin",
    comment:"Kawn ",
},
{
    // id:2,
    id:uuid(),
    username:"javed",
    comment:"laal hai ",
},
{
    // id:3,
    id:uuid(),
    username:"ojaswa",
    comment:"hello beta ojanswa",
}







]

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,'/public')))
app.use(methodOverride('_method'))// method overriding  for post to patch



app.get('/',(req,res)=>{
    res.send("root me apka swagat h");
})


// task -1

app.get('/blogs',(req,res)=>{

    res.render('index',{comments})
})

// task 2--> show just a form for adding a new blogs
app.get('/blog/new',(req,res)=>{
    res.render('new')
})

//task 3--> to actually add a blog in the  db


app.use(express.urlencoded({extended:true}))

app.post('/blogs',(req,res)=>{

   let{username,comment} =req.body;

   comments.push({username,comment,id:uuid()})
   res.redirect('/blogs')//yad rakhne ki get request ja rahi h

})


// task-4 to show info about one particular  blog

app.get('/blogs/:id',(req,res)=>{

    let{id}=req.params;
   let foundComment=comments.find(comment=> comment.id == parseInt(id))
console.log(foundComment);

res.render('show',{foundComment})

})



//task 5- to get the form for editing the  block

app.get('/blogs/:id/edit',(req,res)=>{

    let{id}=req.params;

    let foundComment=comments.find(comment=>comment.id == id)// typecasting because params are in string
     console.log(foundComment);

     res.render('edit',{foundComment})




})

// task-6 actually editng the blog using patch and not put

app.patch('/blogs/:id',(req,res)=>{

    let{id}=req.params;
    let foundComment=comments.find(comment=> comment.id == id)

    let{comment}=req.body;

    foundComment.comment=comment, // changing already presnt data to newly calc data


        res.redirect('/blogs');
   
})

app.delete('/blogs/:id' ,(req,res)=>{
    let{id}=req.params;

    let newarry=comments.filter(comment=> comment.id != id)
    comments=newarry;

    res.redirect('/blogs');
})




app.listen(8080,()=>{
    console.log("server pe ho")
})


