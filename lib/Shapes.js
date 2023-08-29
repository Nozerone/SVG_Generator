const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("utils/generate.js");

class shapes {
  constructor(shape_color, char_text, char_color) {
    this.shape_color = color;
    this.char_text = text;
    this.char_color = charColor;
  }
  setColor(color) {
    this.color = color;
  }

  setText(text) {
    this.char_text = text;
  }
  setCharColor(charColor) {
    this.char_color = charColor;
  }
}

module.exports = shapes;
