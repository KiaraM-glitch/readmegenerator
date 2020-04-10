require("dotenv").config();
const axios = require("axios");
inquirer = require("inquirer");

const api = {
    getUser(user) {
        axios
        .get("https://api.github.com/users/kiaram-glitch",
        {
            headers: {"Authorization": "token " + process.env.GH_TOKEN} })
        
        .then( function(response){ console.log(response.data); return response})
        .catch( function (error){ console.log(error);})
    }
};


api.getUser(user);

module.exports = api;