const path = require("path");
const fs = require("fs");
const render = require("./src/page-template")
const Employee = require("./lib/Employee")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
// const { ENGINE_METHOD_RAND } = require("node:constants");
const inquirer = require("inquirer");
const jest = require("jest")
const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const membersArray = [];
function runApp() {
   addMemberQuestion()
}
function engineerQuestions() {
   inquirer.prompt([
       {
           type: "input",
           name: "engineerName",
           message: "What is the Engineer's Name ?",
       },
       {
           type: "input",
           name: "engineersId",
           message: "What is the Engineer's ID Number ?",
       },
       {
           type: "input",
           name: "engineerEmail",
           message: "What is the Engineers E-Mail ?",
       },
       {
           type: "input",
           name: "github",
           message: "What is Engineers GitHub Username ?"
       },
   ]).then(answers => {
       console.log(answers);
       const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
       console.log(engineer);
       membersArray.push(Engineer);
       console.log(membersArray)
       addMemberQuestion;
   })
}
function managerQuestions() {
   inquirer.prompt([
       {
           type: "input",
           name: "managerName",
           message: "What is the Managers Name ?",
       },
       {
           type: "input",
           name: "managerId",
           message: "What is the Managers ID Number ?",
       },
       {
           type: "input",
           name: "ManagerEmail",
           message: "What is the Managers E-Mail ?",
       },
       {
           type: "number",
           name: "officenumber",
           message: "What is Managers Office Number ?"
       },
   ]).then(answers => {
       console.log(answers);
       const manager = new Manager(answers.name, answers.id, answers.email, answers.github)
       console.log(manager);
       membersArray.push(Manager);
       console.log(membersArray)
       addMemberQuestion;
   })
}
function internQuestions() {
   inquirer.prompt([
       {
           type: "input",
           name: "internsName",
           message: "What is the Intern's Name ?",
       },
       {
           type: "input",
           name: "internsId",
           message: "What is the Intern's ID Number ?",
       },
       {
           type: "input",
           name: "internsEmail",
           message: "What is the Intern's E-Mail ?",
       },
       {
           type: "input",
           name: "school",
           message: "Where did the Intern go to School ?"
       },
   ]).then(answers => {
       console.log(answers);
       const engineer = new Intern(answers.name, answers.id, answers.email, answers.github)
       console.log(intern);
       membersArray.push(Intern);
       console.log(membersArray)
       addMemberQuestion;
   })
}
function buildTeam() {
   // Create the output directory if the output path doesn't exist
   if (!fs.existsSync(OUTPUT_DIR)) {
       fs.mkdirSync(OUTPUT_DIR)
   }
   fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
}
function addMemberQuestion() {
   inquirer.prompt([
       {
           type: "list",
           name: "add",
           message: "Which type of team member would you like to add ?",
           choices: ["Engineer", "Intern", "Finish Building My Team"],
       },
   ])
       .then(answers => {
           console.log("I am inside of line 28")
           if (answers.add === "Engineer") {
               engineerQuestions();
}
           if (answers.add === "Manager") {
               managerQuestions();
           }
           if (answers.add === "Intern") {
               internQuestions();
           }
           if (answers.add === "Finish Building My Team") {
               buildTeam();
           }
       })
}
runApp();
