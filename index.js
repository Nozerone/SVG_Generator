const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/Shapes");

const generate = require("./lib/generate");

const questions = [
  {
    type: "input",
    message: "enter a set of 3 charachters for your svg logo",
    name: "char_text",
  },

  {
    type: "input",
    message: "Please enter a hexadecimal number or color for the text?",
    name: "char_color",
  },

  {
    type: "list",
    message: "Please select a shape from the list",
    name: "shape_logo",
    choices: ["Circle", "Triangle", "Square"],
  },

  {
    type: "input",
    mesage:
      "Please enter a hexadecimal number for the color of your chosen shape",
    name: "shape_Color",
  },
];


//Function to initiate app

function init() {
  inquirer.prompt(questions).then(function (data) {
    var filename = "logo.svg";
    writeToFile(filename, data);
  });
}

init();

//Function to write file

function writeToFile(fileName, data) {
  var content = generate(data);
  fs.writeFile(fileName, content, function (error) {
    if (error) {
      return console.log(error);
    }
    console.log("SUCCESS! Generated logo.sgv");
  });
}