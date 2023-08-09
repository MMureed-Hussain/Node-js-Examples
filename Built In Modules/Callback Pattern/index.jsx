function greet(name){
    console.log(`AoA ${name}`)
}
function greetali(greetFn){
    const name = "Ali";
    greetFn(name);
}
greetali(greet);