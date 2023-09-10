const { Circle, Square, Triangle } = require("../lib/Shapes");

//circle test
describe("circle", () => {
  test("Should return a circle shape", () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
    `<circle cx="145" cy="135" r="75" fill="blue"/>`
    );
  });
});

//Triangle test
describe("triangle", () => {
  test("Should return a triangle shape", () => {
    const shape = new Triangle();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      `<polygon points="150, 18 244, 182 56, 182" fill="green" />`
    );
  });
});

//Square test
describe("square", () => {
  test("Should return a square shape", () => {
    const shape = new Square();
    shape.setColor("#800000");
    expect(shape.render()).toEqual(
      `<rect x="80" y="70" width="125" height="125" fill="#800000"/>`
    );
  });
});
