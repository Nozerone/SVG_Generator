const inquirer = require("inquirer");

const fs = require("fs");

// const { Circle, Square, Triangle } = require("./lib/Shapes");

const generate = require("./lib/generate");

const questions = [
  {
    type: "list",
    message: "Please select a shape from the list",
    name: "shape_logo",
    choices: ["circle", "triangle", "square"],
  },

  {
    type: "input",
    mesage:
      "Please enter a hexadecimal number or color for your chosen shape",
    name: "shape_color",
  },

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
];

//Prompt Questions

function init() {
  inquirer.prompt(questions).then(function (data) {
    var filename = "logo.svg";
    writeToFile(filename, data.shape_logo, data.shape_color, data.char_text, data.char_color);
  });
}

init();

//Function to write file

// function writeToFile(fileName, logo, color, text, charColor) {
//   var content = generate(logo, color);
//   var svgItem = `<svg width="250" height="250">
//   ${content}
//   <text x="150" y="150" font-size="50" text-anchor="middle" fill="${charColor}">${text}</text>
// </svg> `
//   fs.writeFile(fileName, svgItem, function (error) {
//     if (error) {
//       return console.log(error);
//     }
//     console.log("SUCCESS! Generated logo.sgv");
//   });
// }

//test 
function writeToFile(fileName, logo, color, text, charColor) {
  var data = {
    shape_logo: logo,
    shape_color: color,
    char_text: text,
    char_color: charColor
  };

  var content = generate(data);

  var svgItem = `<svg width="250" height="250">
    ${content}
    <text x="150" y="150" font-size="50" text-anchor="middle" fill="${data.char_color}">${data.char_text}</text>
  </svg>`;

  fs.writeFile(fileName, svgItem, function (error) {
    if (error) {
      return console.log(error);
    }
    console.log("SUCCESS! Generated logo.svg");
  });
}