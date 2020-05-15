const express = require('express');

const router = express.Router();

// require the model to be used
//if you need, you bring it
const BlogPost = require('../models/blogPost');


const UserLink = require('../models/userLink');

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



//USERPAGE API

//Userpage Read single
router.get('/userpage/:id', (req,res)=>{
   //? how to pass URL get parameter?

   //how to authorize user before able to acecss data?

    UserPage.find({ })
        .then((data) =>{
            console.log('Data', data);
            res.json(data);
        })
        .catch((error)=>{
            console.log('error: ', daerrorta);
        })
});


//Userpage - save


router.get('/userlink', (req,res)=>{
    // const data = {
    //     username: 'rickvian',
    //     age:25
    // };

    UserLink.find({ })
        .then((data) =>{
            console.log('userlink data: ', data);
            res.json(data);
        })
        .catch((error)=>{
            console.log('error: ', daerrorta);
        })

   
});



router.post('/userlink/save', (req,res)=>{

    const data = req.body;

    console.log(data);
    //pass data to model
    const userLink = new UserLink(data);

    //execute the save
    userLink.save( (error)=>{
        if(error){
            res.status(500).json({
                msg :'sorry internal sever error'
            });
            return;
        }
        
        return res.json({
                msg :'Your UserPage data has been saved'
            });
   
    });
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



module.exports = router;