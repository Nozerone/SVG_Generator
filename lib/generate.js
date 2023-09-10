const { Circle, Triangle, Square } = require("./Shapes");

function generate(data) {
  let shape = undefined;
  if (data.shape_logo === "circle") {
    shape = new Circle( 
      data.char_text,
      data.shape_color,
      data.char_color
    );
  } else if (data.shape_logo === "triangle") {
    shape = new Triangle( 
      data.char_text,
      data.shape_color,
      data.char_color
    );
  } else {
    shape = new Square(
      data.char_text,
      data.shape_color,
      data.char_color
    );
  }
  return shape.render();
}

module.exports = generate;
