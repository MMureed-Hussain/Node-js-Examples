const ShopPizza = require('./pizza-shop.jsx')
const drinkMachine = require('./DrinkMachine.jsx')

const pizzaShop = new ShopPizza();

const drinkmachine = new drinkMachine();

pizzaShop.on("order" , (size , topping)=>{
    console.log(`Order received ! Baking a ${size} Pizza with ${topping}`)
    drinkmachine.serveDrink(size);
})

pizzaShop.order("Large" , "Mushrooms");
pizzaShop.displayOrderNumber();
