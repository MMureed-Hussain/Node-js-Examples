const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("order-pizza", (size,topping)=>{
    console.log(`Order received ! Baking a ${size} Pizza with ${topping}`)
})

emitter.on("order-pizza" , (size)=>{
    if(size === 'Large'){
        console.log("Serving a Complimantry drink")
    }
})

console.log("Do work before event occurs in the system")
emitter.emit("order-pizza" , "Large" , "Takka")