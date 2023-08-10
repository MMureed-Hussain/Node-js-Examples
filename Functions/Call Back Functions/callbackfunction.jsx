console.warn("User 1 Made Request")
setTimeout(callback, 3000)

console.warn("User 2 Made Request")
setTimeout(callback, 6000)

console.warn("User 3 Made Request")
setTimeout(callback, 9000)

function callback(){
    console.warn("Queried the Database and delivered data in 5 sec")
}
