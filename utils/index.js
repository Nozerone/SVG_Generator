const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('lib/generate.js');

const questions = [
  {
    type: "input",
    message: "enter a set of 3 charachters for your svg logo",
    name: "char_text",
  },

  {
    type: "input",
    message: "Please enter a hexadecimal number color for the text?",
    name: "char_Color",
  },

  {
    type: "listraw",
    message: "Please select a shape from the list",
    name: "shape_logo",
    choices: [circle, triangle, square],
  },

  {
    type: "input",
    mesage:
      "Please enter a hexadecimal number for the color of your chosen shape",
    name: "shape_Color",
  },
];

//Function to write file

function writeToFile(fileName, data) {
  var content = generare(data);
  fs.writeFile(fileName, content, function (error) {
    if (error) {
      return console.log(error);
    }
  });
}

console.log("Generated logo.sgv");

//Function to initiate app

function init() {
  inquirer.prompt(questions).then(function (data) {
    var filename = "logo.svg";
    writeToFile(fileName, data);
  });
}

// init();
