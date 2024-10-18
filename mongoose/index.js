const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/nobita ')
.then(()=>{
    console.log("db connected successfully")
})
.catch((err)=>{
    console.log("db not connected successfully")
    console.log(err); 
})


// schema

const movieschema=new mongoose.Schema({

    name:String,
    rating:Number,
    year:Number,
    iswatched:Boolean,



})

// model

const Movie=mongoose.model('Movie',movieschema)

// console.log(Movie);

 let ironman=new Movie({ // created a new object using model (model==js class)
    name:"ironman",
    rating:10,
    year:2015,
    iswatched:true,

 })

 ironman.save();



 
