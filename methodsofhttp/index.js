

const exp=require('express')
const app=exp();


//GET ->

app.get('/' ,(req,res)=>{

res.send('<h2>hello get</h2>')
    
});



app.get('/cat',(req,res)=>{

    res.send('<h2>hello get</h2>')
        
    }),


    app.get('/dog',(req,res)=>{

        res.send('<h2>hello get</h2>')
            
        }),



        // handle bad request->always written at the end
app.get('*',(req,res)=>{
    res.send("abee sale")
})





app.listen(8080,(req,res)=>{console.log('server pe ho ')})

