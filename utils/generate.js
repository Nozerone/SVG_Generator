const square = require("./lib/square.js");
const triangle = require("./lib/triangle.js");
const circle = require("./lib/circle.js");

function generateLogo(data) {
    let shape = undefined;
    if(data.shape === 'square') {
        shape = new square(data.shape_logo, data.shape_color,data.char_text, data.char_color);

    } else if(data.shape === 'triangle') {
        shape = new triangle(data.shape_logo, data.shape_color,data.char_text, data.char_color);

    } else {
        shape = new circle(data.shape_logo, data.shape_color,data.char_text, data.char_color);
    } 
    return shape.render();

}

module.exports = generate;