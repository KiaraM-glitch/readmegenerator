var inquirer = require("inquirer");

inquirer
  .prompt([
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "user"
      },
      {
        type: "input",
        message: "What is your full name?",
        name: "name"
      },  
      {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
      },
        {
        type: "input",
        message: "Enter a brief description of your project",
        name: "description"
        },
        {
        type: "list",
        message: "Which license should your app use?",
        name: "license",
        choices: ["MIT","Public domain", "LGPL", "Proprietary"]
        },
        {
        type: "checkbox",
        message: "Which technologies did you use to build this application?",
        name: "technologies",
        choices: ["Javascript", "CSS", "HTML", "AJAX", "Ruby", "React"]
        },
        {
        type: "input",
        message: "What commands should the user run to install this application?",
        name: "install",
        default: "npm i"
        },
        {
        type: "input",
        message: "What should the user know about using this application?",
        name: "instructions"
        },
        {
        type: "input",
        message: "What should the user know about running tests for this application?",
        name: "tests"
        }
    
    ])
    .then(answers => {
      console.log(answers)
      api.getUser(answers.user)
      .then(response =>{
      generateMD(answers, response.data)
      const markdown = generateMD(answers, response.data)
      fs.writeFile("./README.md", markdown, () => {
        console.log("success!")
      } )
    
    
    }
      
      
    )
    .catch(error => {
    
      console.log(error)
    
    })
    })
    module.exports = questions;
    
    
    
    function init() {
    
    }
    
    init();
//   .then(function(response) {

//     if (response.confirm === response.password) {
//       console.log("Success!");
//     }
//     else {
//       console.log("You forgot your password already?!");
//     }
//   });
//badge:
  //<img align="left" src= "https://img.shields.io/badge/License-${response.license}-green">
