// const add = (x, y) => {
//     return (x + y)
// }

// const subtract = (x, y) => {
//     return (x - y)
// }

// const divide = (x, y) => {
//     return (x / y)
// }

// const multiply = (x, y) => {
//     return (x * y)
// }

// const sqRoot = (a,b) => {
//     return (Math.sqrt((a * a) + (b * b)));
// }

// const maxNumber = (a,b,c) =>{
//     return (Math.max(a,b,c))
// }

// module.exports = add, subtract, divide, multiply, sqRoot, maxNumber

const mathTesting = {
    additional:function(x,y){
        return x + y
    },
    subtraction: function(x,y){
        return x - y
    },
    multiplication: function(x,y){
        return x * y
    },
    division: function(x,y){
        return x / y
    },
    sqrt: function(x,y){
        return (Math.sqrt((x * x) + (y * y)));
    },
    max: function(x,y,z){
        return (Math.max(x,y,z))
    },
    
    
}
module.exports = mathTesting