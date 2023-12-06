const Product = require("./Product");

module.exports = class Poster extends Product {
    constructor(name, description, price, heigh, width, inStock = 0) {
        super(name, description, price, inStock)
        this.heigh = heigh
        this.width = width
    }
}
