const { Circle, Triangle, Square } = require("./Shapes");

function generate(data) {
  let shape = undefined;
  if (data.shape_logo === "circle") {
    shape = new Circle( 
      data.shape_color,
      data.char_text,
      data.char_color
    );
  } else if (data.shape_logo === "triangle") {
    shape = new Triangle( 
      data.shape_color,
      data.char_text,
      data.char_color
    );
  } else {
    shape = new Square(
      data.shape_color,
      data.char_text,
      data.char_color
    );
  }
  return shape.render();
}

module.exports = generate;
