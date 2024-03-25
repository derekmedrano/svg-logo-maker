const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle} = require ('./lib/shapes');
const {Circle} = require ('./lib/shapes');
const {Square} = require ('./lib/shapes');

inquirer.prompt([
    {
      type: "list",
      message: "What shape would you like?",
      name: "shape",
      choices: ["Triangle", "Circle", "Square"]
    },
    {
        type: "input",
        message: "Desired shape color?",
        name: "shapeColor"
    },
    {
        type: "input",
        message: "What's your desired text? (Must be 1-3 characters.)",
        name: "text"
    },
    {
        type: "input",
        message: "Desired text color?",
        name: "color"
    }
]).then (res => {
    let svg 
    if (res.shape === "Triangle") {
        svg = new Triangle (res.text, res.color, res.shapeColor)

    }
        else if (res.shape === "Circle") {
        svg = new Circle (res.text, res.color, res.shapeColor)

    }
        else {
        svg = new Square (res.text, res.color, res.shapeColor)

    };
    
    fs.writeFileSync("./examples/logo.svg", svg.render());
});