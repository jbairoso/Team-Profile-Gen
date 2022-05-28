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
      message: "Please select the employee's role",
      choices: ["Manager", "Engineer", "Intern"],
    },
    {
      type: "input",
      name: "name",
      message: "Please enter Employee's name (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your Employee's name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Please enter employee ID",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter Employee's ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter Employee's email (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter Employee's email!");
          return false;
        }
      },
    },
  ]);
};

promptUser().then((team) => {
  return generatePage(team);
});
