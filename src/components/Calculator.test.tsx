import {Calculator} from "./Calculator"

describe ("string calculator",()=>{
    test("return 0 for empty string",()=>{
        expect(Calculator("")).toBe(0)
    })
    test("returns the number itself for single number input",()=>{
        expect(Calculator("1")).toBe(1)
    })
    test("add two numbers by comma seperated",()=>{
        expect(Calculator("1,2")).toBe(3)
    })
    test("add multiple comma seperated numbers",()=>{
        expect(Calculator("1,2,3,4,5")).toBe(15)
    })
    test("handles new line as delimiter",()=>{
        expect(Calculator("1\n2,3")).toBe(6)
    })
})