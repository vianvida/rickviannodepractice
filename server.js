
//Import npm packages
const express = require ('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const MONGODB_URI = 'mongodb+srv://rickvian:testinghash@cluster0-aug3g.gcp.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI || 'mongodb://localhost/rickvian_mern',{
    useNewUrlParser:true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () =>{
    console.log('mongoose connected');
})

// Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title: String,
    body: String,
    data: {
        type: String,
        default : Date.now()
    }
}); 

//Model
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

// saving data to mongoose
const data = {
    title: 'welcome to my website',
    body: 'im gonna be a full stack developer'
}

const newBlogPost = new BlogPost(data); //instance of te model

// newBlogPost.save((error) =>{
//     if(error){
//         console.log('Ops something wrong!!!!');
//     }else{
//         console.log('data has been saved!!!!');
//     }
// })

// .save();



//HTTP Request logger
app.use(morgan('tiny'));


//routes
app.get('/api', (req,res)=>{
    // const data = {
    //     username: 'rickvian',
    //     age:25
    // };

    BlogPost.find({ })
        .then((data) =>{
            console.log('Data', data);
            res.json(data);
        })
        .catch((error)=>{
            console.log('error: ', daerrorta);
        })

   
});

app.get('/api/name', (req, res)=>{
    const data = {
        username: 'peterson',
        age:5
    };
    res.json(data);
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));