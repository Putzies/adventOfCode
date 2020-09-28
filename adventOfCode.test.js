const code = require('./adventOfCode.js');

const expect = (testName, a, b) => {
    if ((typeof a === typeof b) && (JSON.stringify(a) === JSON.stringify(b))) {
        console.log(testName + ': PASSED');
    } else {
        console.log(testName + ': FAILED')
    }
}



expect('/splitDigits/ Splits a number', code.splitDigits(12345), [1, 2, 3, 4, 5]);
expect('/splitDigits/ Splits 1 digit', code.splitDigits(1), [1]);
expect('/splitDigits/ Splits 0', code.splitDigits(0), [0]);
expect('Splits 0\'s', code.splitDigits(0100), [0, 1, 0, 0]);

expect('/criteriaContainsDuplicates/ Detects duplicates', code.criteriaContainsDuplicates([1, 0, 1, 1]), true);
expect('/criteriaContainsDuplicates/ Dont give false positive', code.criteriaContainsDuplicates([1, 0, 1, 0]), false);

expect('/criteriaNoneDecreasingDigits/ Detects increasing digits', code.criteriaNoneDecreasingDigits([0, 1, 2, 3]), true);
expect('/criteriaNoneDecreasingDigits/ Dont give false positives', code.criteriaNoneDecreasingDigits([0, 1, 0, 4]), false);
expect('/criteriaNoneDecreasingDigits/ Can handle duplicates', code.criteriaNoneDecreasingDigits([1, 2, 2, 1]), false);