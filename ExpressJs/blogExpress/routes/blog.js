const express = require('express')
const path = require('path')
const blogs = require('../data/blogs')

const router = express.Router()
//express.Router() is a built-in method in Express.js that creates a modular, mountable route handler. It allows you to define routes separately and then use them in your main application file, keeping your code organized and scalable.

router.get('/', (req, res)=>{
    res.render('home');
})

router.get('/blog', (req, res)=>{ 
    res.render('blogHome', {
        blogs: blogs
    });
})

router.get('/blogpost/:slug', (req, res)=>{  
    myBlog = blogs.filter((e)=>{
        return e.slug == req.params.slug
    })  
    // console.log(myBlog)
    res.render('blogPage', {
        title: myBlog[0].title,
        content: myBlog[0].content
    });
    
})

module.exports = router