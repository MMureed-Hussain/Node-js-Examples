const EventEmitter = require("node:events")

class ShopPizza {
    constructor(){
        this.orderNumber = 0;
    }
    order(){
        this.orderNumber++;
    }
    displayOrderNumber(){
        console.log(`current order number: ${this.orderNumber}`)
    }
}

module.exports = ShopPizza;