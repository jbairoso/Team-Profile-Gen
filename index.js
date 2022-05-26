const inquirer = "inquirer";
const { writeFile } = require("./src/write-file.js");
const generatePage = require("./src/page-template");
const fs = require("fs");

const promptUser = () => {
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
      },
    },
  ]);
};

