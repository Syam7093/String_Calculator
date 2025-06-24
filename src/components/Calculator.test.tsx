import {Calculator} from "./Calculator"

describe ("string calculator",()=>{
    test("return 0 for empty string",()=>{
        expect(Calculator("")).toBe(0)
    })
})