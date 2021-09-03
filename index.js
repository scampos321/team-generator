const render = require('./page-template.js');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Employee = require('./lib/employee');



const OUTPUT_DIR = path.resolve(__dirname, 'dist');
const outputPath = path.join(OUTPUT_DIR, "index.html")

const team = [
    new Manager("Sebastian", 1 , "seb.campos03@gmail.com", "12"),
    new Engineer("Ruben", 2 , "seb.campos03@gmail.com", "rubenIsaac123"),
    new Employee("Beatriz", 3 , "seb.campos03@gmail.com", "bea321shirley"),
    new Intern("Isaac", 4 , "seb.campos03@gmail.com", "GT")
];

fs.writeFileSync(outputPath, render(team), "utf-8");