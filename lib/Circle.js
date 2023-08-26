class circle {
    constructor(children = []) {
        this.children = children;

    } 
    render() {
        throw Error ("child class must implement render() method.");
    }
    
    renderSvg() {}

}

module.exports = circles;