const splitDigits = number => {
    const digits = [];
    let rest = number;
    let restLength = rest.toString().length;

    while (restLength > 0) {
        const digit = rest % 10;
        rest = Math.floor(rest / 10);

        digits.unshift(digit);

        restLength--;
    }

    return digits;
}

const criteriaIs6Digits = digits => {
    return digits.length === 6;
}

const criteriaWithinRange = (number, min, max) => {
    return number >= min && number <= max;
}

const criteriaContainsDuplicates = digits => {
    return digits.some((a, i, array) => {
        if (i > 0) {
            return array[i - 1] === a;
        }
        return false;
    })
}

const criteriaNoneDecreasingDigits = digits => {
    return digits.every((a, i, array) => {
        return i === 0 || array[i - 1] <= a;
    })
}


const meetsCritera = (number, min, max) => {
    const digits = splitDigits(number);
    return criteriaIs6Digits(digits) && criteriaContainsDuplicates(digits) && criteriaNoneDecreasingDigits(digits) && criteriaWithinRange(number, min, max);
}

const checkRangeForCriteria = (min, max) => {
    let count = 0;
    for (let i = min; i <= max; i++) {
        if (meetsCritera(i, min, max)) {
            count++;
        }
    }

    return count;
}


const MIN = 172930;
const MAX = 683082;

console.log('Antal möjliga lösenord i intervallet: ' + checkRangeForCriteria(MIN, MAX));


exports.splitDigits = splitDigits;
exports.criteriaContainsDuplicates = criteriaContainsDuplicates;
exports.criteriaNoneDecreasingDigits = criteriaNoneDecreasingDigits;