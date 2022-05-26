const inquirer = require("inquirer");
const { writeFile } = require("./src/write-file.js");
const generatePage = require("./src/page-template");
const fs = require("fs");
const Employee =require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your Name!");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "id",
      message: "Please enter your employee ID",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email",
    },
  ]);
};

promptUser();