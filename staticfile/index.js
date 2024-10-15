
const express=require('express')

const app=express();

const path=require('path')


app.set('view engine','ejs')

app.set('views',path.join(__dirname,'/views'))
app.use(express.static(path.join(__dirname,'/public')))
app.get('/',(req,res)=>{

    res.render('index');

})

app.listen(8080,()=>{
    console.log('server pe ho ')
})