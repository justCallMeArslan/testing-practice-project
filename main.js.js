export function sum(a, b) {
    return a + b
}


export function capitalizeFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

export function reverseString(str) {
    return [...str].reverse().join("");

}

export const calculator = {
    add(a, b) {
        return a + b
    },

    subtract(a, b) {
        return a - b
    },

    multiply(a, b) {
        return a * b
    },
    divide(a, b) {
        return a / b;
    }
}

