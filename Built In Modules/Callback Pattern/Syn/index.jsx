function greet(name){
    console.log(`AoA, ${name}`)
}
function higherOrderFunction(callback){
    const name = "Ali";
    callback(name);
}
higherOrderFunction(greet);

//Higher Order Function is Synchronous Callback Function
//A callback which is excetued immediately is called a Synchronous callback
// Examples 
 // sort * filter * map functions