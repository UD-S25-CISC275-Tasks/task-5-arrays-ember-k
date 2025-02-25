/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let numbersClone: number[] = [...numbers];
    if (numbersClone.length < 1) {
        return [];
    } else if (numbersClone.length === 1) {
        return [...numbersClone, ...numbersClone];
    }
    return [numbersClone[0], numbersClone[numbersClone.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((num: number): number => num * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((num: string): number =>
        Number.isNaN(Number(num)) ? 0 : Number(num),
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let noDollar: string[] = amounts.map((str: string): string =>
        Number(str.startsWith("$")) ? str.slice(1) : str,
    );
    return noDollar.map((num: string): number =>
        Number.isNaN(Number(num)) ? 0 : Number(num),
    );
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let noQuestions: string[] = messages.filter(
        (message: string): boolean => !message.endsWith("?"),
    );
    return noQuestions.map((message: string): string =>
        message.endsWith("!") ? message.toUpperCase() : message,
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
// Credit: Asked ChatGPT if a condition could be put inside the reduce function (and asked about syntax for that)
export function countShortWords(words: string[]): number {
    return words.reduce(
        (count: number, word: string) => (word.length < 4 ? count + 1 : count),
        0,
    );
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green",
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum = addends.reduce((total: number, num: number) => total + num, 0);
    return addends.length === 0 ? "0=0" : `${sum}=` + addends.join("+");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
// Credit: Asked chatGPT if reduce() can keep track of indexes
export function injectPositive(values: number[]): number[] {
    let negativeIndex = values.findIndex((num: number): boolean => num < 0);
    let sum = values.reduce(
        (sumPreNegative: number, num: number, index: number) =>
            negativeIndex === -1 || index < negativeIndex ?
                sumPreNegative + num
            :   sumPreNegative,
        0,
    );
    if (negativeIndex === -1) {
        return [...values, sum];
    }
    let insertedSum = [...values];
    insertedSum.splice(negativeIndex + 1, 0, sum);
    return insertedSum;
}
