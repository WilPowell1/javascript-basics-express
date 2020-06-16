const negate = a => {
    return !a;
};

const both = (a, b) => {
    return a && b;
};

const either = (a, b) => {
    return a || b;
};

const none = (a, b) => {
    return !a && !b;
};

const one = (a, b) => {
    if (!a && b) {
        return true;
    } else if (a && !b) {
        return true;
    } else {
        return false;
    }
};

const truthiness = a => {
    if (a) {
        return true;
    } else {
        return false;
    }
};

const isEqual = (a, b) => {
    return a === b;
};

const isGreaterThan = (a, b) => {
    if (a > b) {
        return true;
    } else {
        return false;
    }
};

const isLessThanOrEqualTo = (a, b) => {
    if (a <= b) {
        return true;
    } else {
        return false;
    }
};

const isOdd = a => {
    if (a % 2 === 1) {
        return true;
    } else {
        return false;
    }
};

const isEven = a => {
    if (a % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

const isSquare = a => {
    return Math.sqrt(a) % 1 === 0;
};

const startsWith = (char, string) => {
    return string.startsWith(char);
};

const containsVowels = string => {
    return Boolean(string.match(/[aeiou]/gi));
};

const isLowerCase = string => {
    return string === string.toLowerCase();
};

module.exports = {
    negate,
    both,
    either,
    none,
    one,
    truthiness,
    isEqual,
    isGreaterThan,
    isLessThanOrEqualTo,
    isOdd,
    isEven,
    isSquare,
    startsWith,
    containsVowels,
    isLowerCase
};