const add = require("./mathTesting");
const subtract = require("./mathTesting");
const divide = require("./mathTesting");
const multiply = require("./mathTesting");
const sqRoot = require("./mathTesting");
const maxNumber = require("./mathTesting");

describe('Testing Math Skills', () =>{
    test("96+55=151", ()=>{
       expect(add(96,55)).toEqual(151)
    }),

    test("33 - 27 = 6", ()=>{
        expect(subtract(33,27)).toEqual(6)
    }),

    test("100 ÷ 2 = 6", ()=>{
        expect(divide(100,2)).toEqual(50)
    }),

    test("13 × 2 = 26", ()=>{
        expect(multiply(13,2)).toEqual(26)
    }),

    test("(3×3) + (4×4) = 5", ()=>{
        expect(sqRoot(3,4)).toEqual(5)
    }),

    test("Max Number of 1,3,2", ()=>{
        expect(maxNumber(1,3,2)).toEqual(3)
    })
})