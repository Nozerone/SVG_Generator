class shapes {
  constructor(logo, color, text, charColor) {
    this.logo = logo;
    this.color = color;
    this.text = text;
    this.charColor = charColor;
  }
  setLogo(logo) {
    this.logo = logo;
  }
  setColor(color) {
    this.color = color;
  }
  setText(text) {
    this.text = text;
  }
  setCharColor(charColor) {
    this.charColor = charColor;
  }
}

class Circle extends shapes {
  render() {
    return `<circle cx="145" cy="135" r="75" fill="${this.color}"/>`;
  }
}

class Triangle extends shapes {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

class Square extends shapes {
  render() {
    return `<rect x="80" y="70" width="125" height="125" fill="${this.color}"/>`;
  }
}

module.exports = { Circle, Triangle, Square };
