const inquirer = require("inquirer");
const generateHTML = require("./src/page-template.js");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const team = [];

const promptUser = () => {
  return inquirer
    .prompt([
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
        }
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
        }
      },
      {
        type: "input",
        name: "email",
        message: "Please enter Employee's email (Required)",
        validate: emailInput => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
            if (valid) {
                return true;
            } else {
                console.log('Please enter a valid Email address.');
                return false;
            }
        }
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
        }
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
        }
      },
      {
        type: "input",
        name: "glink",
        message: "Enter Engineer's GitHub Link",
        when: (input) => input.role === "Engineer",
        validate: (glink) => {
          if (glink) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: "input",
        name: "school",
        message: "Enter Intern's school name",
        when: (input) => input.role === "Intern",
      },
      {
        type: "confirm",
        name: "addRole",
        message: "Would you like to add another employee?",
        default: false,
      },
    ])

    .then(userInfo => {
      let {
        role,
        name,
        id,
        email,
        officeNumber,
        github,
        glink,
        school,
        addRole,
      } = userInfo;
      let employeeRole;

      if (role === "Manager") {
        employeeRole = new Manager(name, id, email, officeNumber);
        console.log(employeeRole);
      } else if (role === "Engineer") {
        employeeRole = new Engineer(name, id, email, github, glink);
        console.log(employeeRole);
      } else if (role === "Intern") {
        employeeRole = new Intern(name, id, email, school);
        console.log(employeeRole);
      }
      //creates a string
      team.push(employeeRole);
      //option to add additional employee
      if (addRole) {
        return promptUser(team);
      } else {
        return team;
      }
    })
};
//will add the user input into index.html
const writeFile = data => {
  fs.writeFile("./index.html", data, (err) => {
    if (err) {
      reject(err);
      return;
    }
    resolve({
      ok: true,
      message: "File created!",
    })
  })
};
//initiates user input and creates page using user data
promptUser()
  .then((team) => {
    return generateHTML(team);
  })
  .then((htmlpage) => {
    return writeFile(htmlpage);
  })
  .catch((err) => {
    console.log(err);
  });
