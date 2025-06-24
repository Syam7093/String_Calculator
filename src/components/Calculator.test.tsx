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
})