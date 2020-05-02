const express = require('express');

const router = express.Router();

// require the model to be used
//if you need, you bring it
const BlogPost = require('../models/blogPost');

//routes
router.get('/', (req,res)=>{
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


//routes
router.post('/save', (req,res)=>{
    console.log('Body: ', req.body);

    const data = req.body;
    //pass data to model
    const newBlogPost = new BlogPost(data);

    //execute the save
    newBlogPost.save( (error)=>{
        if(error){
            res.status(500).json({
                msg :'sorry internal sever error'
            });
            return;
        }
        //blogPOst
        return res.json({
                msg :'Your data has been saved'
            });
   
    });

 
   
});



router.get('/name', (req, res)=>{
    const data = {
        username: 'peterson',
        age:5
    };
    res.json(data);
});

module.exports = router;