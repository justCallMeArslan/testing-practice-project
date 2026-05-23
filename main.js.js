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


export function caesarCipher(str, shift) {
    return [...str]
        .map(char => {
            const code = char.charCodeAt(0);

            if (code >= 65 && code <= 90) { // uppeCase
                return String.fromCharCode(
                    ((code - 65 + shift) % 26) + 65
                );
            }

            if (code >= 97 && code <= 122) {
                return String.fromCharCode(
                    ((code - 97 + shift) % 26) + 97
                );
            }
            return char;
        })
        .join("")
}



