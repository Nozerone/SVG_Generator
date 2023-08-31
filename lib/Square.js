const { shapes } = require("./Shapes");

class square extends shapes {
  render() {
    return ` <svg height="500" width="500">
            <rect x="10" y="10" width="30" height="30" fill="${this.shape_color}/>
            <text fill="${this.char_color}" font-size="75" x="-150" y="250" />${this.char_text}</text>
            </svg>`;
  }
}

module.exports = square;
