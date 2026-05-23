import { calculator, capitalizeFirst, reverseString, sum } from "./main.js";

test("sum 2 digits", () => {
    expect(sum(10, 10)).toBe(20);
})

test("first letter is capital", () => {
    expect(capitalizeFirst("sandstorm")).toBe("Sandstorm"); //strings are premitive values, so toBe used
})

test("first letter is capital", () => {
    expect(capitalizeFirst("a")).toBe("A"); //strings are premitive values, so toBe used
})

test("first letter is capital", () => {
    expect(capitalizeFirst("hello world")).toBe("Hello world"); //strings are premitive values, so toBe used
})

test("reversed string", () => {
    expect(reverseString("Hello world")).toBe("dlrow olleH");
})

test("reversed mix num+letters", () => {
    expect(reverseString("123abc")).toBe("cba321");
})

test("reversed palindrome", () => {
    expect(reverseString("A roza upala na lapu Azora")).toBe("arozA upal an alapu azor A");
})

test("addition", () => {
    expect(calculator.add(2, 2)).toBe(4);
})

test("subtraction", () => {
    expect(calculator.subtract(2, 4)).toBe(-2);
})

test("multiplication", () => {
    expect(calculator.multiply(2, 2)).toBe(4);
})

test("division", () => {
    expect(calculator.divide(2, 2)).toBe(1);
})