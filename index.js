const inquirer = require("inquirer");
const generatePage = require("./src/page-template");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const { validate, isPureish } = require("@babel/types");
const { isModuleNamespaceObject } = require("util/types");

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
    {
      //only functions when manager is picked
      type: "input",
      name: "officeNumber",
      message: "What is the Manager's office number?",
      when: (input) => input.role === "Manager",
      validate: (officeNumber) => {
        //not a number
        if (isNaN(officeNumber)) {
          console.log("Enter Manager's office number");
          return false;
        } else {
          return true;
        }
      },
    },
    {
        //only functions when engineer is picked
      type: "input",
      name: "github",
      message: "Enter Engineer's Github username",
      when: (input) => input.role === "Engineer",
      validate: (github) => {
        if (github) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
        type:"input",
        name:"glink",
        message:"Enter Engineer's GitHub Link",
        when: (input) => input.role === "Engineer",
        validate: (glink) => {
            if (glink) {
                return true;
            } else {
                return false;
            }
        }
        
    }
  ]);
};

const writeFile = (fileContent) => {
  fs.writeFile("./dist/index.html", fileContent, (err) => {
    if (err) {
      reject(err);
      return;
    }
    resolve({
      ok: true,
      message: "File created!",
    });
  });
};
promptUser()
  .then((team) => {
    return generatePage(team);
  })
  .then((htmlpage) => {
    return writeFile(htmlpage);
  })
  .catch((err) => {
    console.log(err);
  });
