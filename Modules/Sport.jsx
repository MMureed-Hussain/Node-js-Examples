// function jump() {
//     console.warn("this is jump");
// }

// function longjump() {
//     console.warn("this is longjump");
// }

// module.exports = {
//     jump: jump,
//     longjump: longjump
// };

// Or

module.exports = {
    jump:function() {
        console.warn("this is jump");
    },
    longjump:function() {
        console.warn("this is longjump");
    }
};
