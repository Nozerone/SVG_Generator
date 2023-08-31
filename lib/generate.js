const square = require("./Square");
const triangle = require("./Triangle");
const circle = require("./Circle");

// function generate(data) {
//     let shape = undefined;
//     if(data.shape === 'square') {
//         shape = new square(data.shape_logo, data.shape_color,data.char_text, data.char_color);

//     } else if(data.shape === 'triangle') {
//         shape = new triangle(data.shape_logo, data.shape_color,data.char_text, data.char_color);

//     } else {
//         shape = new circle(data.shape_logo, data.shape_color,data.char_text, data.char_color);
//     } 
//     return shape.render();

// }
function generate(data) {
    let shape = undefined;
    if (data.shape === "square") {
      shape = new square(
        data.shape_logo,
        data.shape_color,
        data.char_text,
        data.char_color
      );
    } else if (data.shape === "triangle") {
      shape = new triangle(
        data.shape_logo,
        data.shape_color,
        data.char_text,
        data.char_color
      );
    } else {
      shape = new circle(
        data.shape_logo,
        data.shape_color,
        data.char_text,
        data.char_color
      );
    }
    return shape.render();
  }

module.exports = generate;