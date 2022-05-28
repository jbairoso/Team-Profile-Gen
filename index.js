const inquirer = require("inquirer");
const { writeFile } = require("./src/write-file.js");
const generatePage = require("./src/page-template");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const team = [];

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "Please select the employee's role (Required)",
      choices: ["Manager", "Engineer", "Intern"],
    },
    {
      type: "input",
      name: "id",
      message: "Please enter your employee ID",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your Name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email",
    },
  ]);
};

promptUser().then((team) => {
  return generatePage(team);
});
