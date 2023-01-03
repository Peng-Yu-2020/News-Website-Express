const express = require("express");
const newsRouter = express.Router();
const axios = require("axios");

newsRouter.get("", async(req, res) => {
    
    try {
        const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/`)
        res.render("news", {articles : newsAPI.data});
    } catch(error) {
        if (error.response){
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(error.response.headers);
        } else if (error.requiest){
            console.log(error.requiest)
        } else {
            console.log(`error`)
        }
    }
})


newsRouter.get("/:id", async(req, res) => {
    let articleId = req.params.id;
    try {
        const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/${articleId}`)
        res.render("newsSingle", {article : newsAPI.data});
    } catch(error) {
        if (error.response){
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(error.response.headers);
        } else if (error.requiest){
            console.log(error.requiest)
        } else {
            console.log(`error`)
        }
    }
})


newsRouter.post("", async(req, res) => {
    let search = req.body.search;
    try {
        const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts?search=${search}`)
        res.render("newsSearch", {articles : newsAPI.data});
    } catch(error) {
        if (error.response){
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(error.response.headers);
        } else if (error.requiest){
            console.log(error.requiest)
        } else {
            console.log(`error`)
        }
    }
})

module.exports = newsRouter;

