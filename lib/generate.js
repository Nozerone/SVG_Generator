const { Circle, Square, Triangle } = require("./Shapes");
// const shapes = require("./Shapes")


function generate(data) {
  let shape = undefined;
  if (data.shape === "square") {
    shape = new Square(
      data.shape_logo,
      data.shape_color,
      data.char_text,
      data.char_color
    );
  } else if (data.shape === "triangle") {
    shape = new Triangle(
      data.shape_logo,
      data.shape_color,
      data.char_text,
      data.char_color
    );
  } else {
    shape = new Circle(
      data.shape_logo,
      data.shape_color,
      data.char_text,
      data.char_color
    );
  }
  return shape.render();
}


module.exports = generate;