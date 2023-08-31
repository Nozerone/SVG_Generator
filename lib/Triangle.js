const { shapes } = require("./Shapes");

class triangle extends shapes {
  render() {
    return ` <svg height="500" width="500">
            <polygon points="150, 18 244, 182 56, 182" fill="${this.shape_color}" />'
            <text fill="${this.char_color}" font-size="75" x="-150" y="250" />${this.char_text}</text>
            </svg>`;
  }
}

module.exports = triangle;

