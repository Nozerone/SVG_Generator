class shapes {
  constructor(logo, color, text, charColor) {
    this.shape_logo = logo;
    this.shape_color = color;
    this.char_text = text;
    this.char_color = charColor;
  }
  setLogo(logo) {
    this.shape_logo = logo;
  }
  setColor(color) {
    this.shape_color = color;
  }
  setText(text) {
    this.char_text = text;
  }
  setCharColor(charColor) {
    this.char_color = charColor;
  }
}

class Circle extends shapes {
  render() {
    return `<circle cx="145" cy="135" r="75" fill="${this.shape_color}"/>`;
  }
}

class Triangle extends shapes {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shape_color}" />`;
  }
}

class Square extends shapes {
  render() {
    return `<rect x="80" y="70" width="125" height="125"  fill="${this.shape_color}"/>`;
  }
}

module.exports = { Circle, Triangle, Square };
