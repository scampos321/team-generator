const render = require('./src/page-template.js');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Employee = require('./lib/employee');
const inquirer = require('inquirer');
const idArray = [];


const OUTPUT_DIR = path.resolve(__dirname, 'dist');
const outputPath = path.join(OUTPUT_DIR, "index.html")

const team = [
    // new Manager("Sebastian", 1 , "seb.campos03@gmail.com", "12"),
    // new Engineer("Ruben", 2 , "seb.campos03@gmail.com", "rubenIsaac123"),
    // new Employee("Beatriz", 3 , "seb.campos03@gmail.com", "bea321shirley"),
    // new Intern("Isaac", 4 , "seb.campos03@gmail.com", "GT")
    // TEST OBJECTS
];

function writeFile(team) {
    fs.writeFileSync(outputPath, render(team), "utf-8");
}

function init() {
    inquirer.prompt([
       {
           type: "input",
           name: "managerName",
           message: "What is the team manager's name?",
           validate: answer => {
           if (answer !== "") {
               return true;
           }
           return "Please enter at least one character.";
        }
       },
       {
        type: "input",
        name: "managerId",
        message: "What is the team manager's id?",
        validate: answer => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
                return true;
            } 
            return "Enter positive number greater than 0"
        }
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email?",
        validate: answer => {
        const pass = answer.match(/\S+\.\S+/);
        if (pass) {
            return true;
        } 
        return "Enter a valid email"
    }
    },
    {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the team manager's office number?",
        validate: answer => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
                return true;
            } 
            return "Enter positive number greater than 0"
        }
    },
    {
           type: "input",
           name: "managerName",
           message: "What is the team manager's name?",
           validate: answer => {
           if (answer !== "") {
               return true;
           }
           return "Please enter at least one character.";
        }
       },
       {
        type: "input",
        name: "managerId",
        message: "What is the team manager's id?",
        validate: answer => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
                return true;
            } 
            return "Enter positive number greater than 0"
        }
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email?",
        validate: answer => {
        const pass = answer.match(/\S+\.\S+/);
        if (pass) {
            return true;
        } 
        return "Enter a valid email"
    }
    },
    {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the team manager's office number?",
        validate: answer => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
                return true;
            } 
            return "Enter positive number greater than 0"
        }
    }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        team.push(manager);
        writeFile(team);
        renderTeam();
    })
}

function renderTeam(){
    inquirer.prompt([
        {
            type: "list",
            name: "teamChoice",
            message: "What kind of team member would you want to add?",
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add more team members",
            ],
        },
    ]).then(userChoice => {
        switch (userChoice.teamChoice) {
            case "Engineer":
                createEngineer();
                break;
            case "Intern":
                createIntern();
                break;
            case "I don't want to add more team members":
                writeFile(team);
            default:
            writeFile(team);
            break;
        }
    });
}

function createEngineer(){
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the team engineer's name?",
            validate: answer => {
            if (answer !== "") {
                return true;
            }
            return "Please enter at least one character.";
         }
        },
        {
         type: "input",
         name: "engineerId",
         message: "What is the team engineer's id?",
         validate: answer => {
             const pass = answer.match(/^[1-9]\d*$/);
             if (pass) {
                 if(idArray.includes(answer)){
                     return "ID is taken. Enter another number."
                 } else {
                    return true;
                 }
            } 
             return "Enter positive number greater than 0"
         }
     },
     {
         type: "input",
         name: "engineerEmail",
         message: "What is the team engineer's email?",
         validate: answer => {
         const pass = answer.match(/\S+\.\S+/);
         if (pass) {
             return true;
         } 
         return "Enter a valid email"
     }
     },
     {
            type: "input",
            name: "engineerName",
            message: "What is the team engineer's name?",
            validate: answer => {
            if (answer !== "") {
                return true;
            }
            return "Please enter at least one character.";
         }
        },
        {
         type: "input",
         name: "engineerId",
         message: "What is the team engineer's id?",
         validate: answer => {
             const pass = answer.match(/^[1-9]\d*$/);
             if (pass) {
                 return true;
             } 
             return "Enter positive number greater than 0"
         }
     },
     {
         type: "input",
         name: "engineerEmail",
         message: "What is the team engineer's email?",
         validate: answer => {
         const pass = answer.match(/\S+\.\S+/);
         if (pass) {
             return true;
         } 
         return "Enter a valid email"
     }
     },
     {
         type: "input",
         name: "engineerGithub",
         message: "What is the team engineer's GitHub?",
         validate: answer => {
                if (answer !== "") {
                    return true;
                }
             return "Enter at least one character."
         }
    }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        team.push(engineer);
        idArray.push(answers.engineerId);
        renderTeam();
    });
}

function createIntern(){
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the team intern's name?",
            validate: answer => {
            if (answer !== "") {
                return true;
            }
            return "Please enter at least one character.";
         }
        },
        {
         type: "input",
         name: "internId",
         message: "What is the team intern's id?",
         validate: answer => {
             const pass = answer.match(/^[1-9]\d*$/);
             if (pass) {
                 if(idArray.includes(answer)){
                     return "ID is taken. Enter another number."
                 } else {
                    return true;
                 }
            } 
             return "Enter positive number greater than 0"
         }
     },
     {
         type: "input",
         name: "internEmail",
         message: "What is the team intern's email?",
         validate: answer => {
         const pass = answer.match(/\S+\.\S+/);
         if (pass) {
             return true;
         } 
         return "Enter a valid email"
     }
     },
     {
            type: "input",
            name: "internName",
            message: "What is the team intern's name?",
            validate: answer => {
            if (answer !== "") {
                return true;
            }
            return "Please enter at least one character.";
         }
        },
        {
         type: "input",
         name: "internId",
         message: "What is the team intern's id?",
         validate: answer => {
             const pass = answer.match(/^[1-9]\d*$/);
             if (pass) {
                 return true;
             } 
             return "Enter positive number greater than 0"
         }
     },
     {
         type: "input",
         name: "internEmail",
         message: "What is the team intern's email?",
         validate: answer => {
         const pass = answer.match(/\S+\.\S+/);
         if (pass) {
             return true;
         } 
         return "Enter a valid email"
     }
     },
     {
         type: "input",
         name: "internSchool",
         message: "Where did the intern go to school?",
         validate: answer => {
                if (answer !== "") {
                    return true;
                }
             return "Enter at least one character."
         }
    }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        team.push(intern);
        idArray.push(answers.internId);
        renderTeam();
    });
}

init();