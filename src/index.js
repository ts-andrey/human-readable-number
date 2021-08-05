module.exports = function toReadable(number) {
    const unicNumbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred",
    };

    const converter = (number) => {
        const stringNumber = number.toString();
        let counter = stringNumber.length - 1;
        let resultString = "";
        let tempStr = "";

        if (counter > 0) {
            if (stringNumber[counter - 1] !== "0") {
                tempStr = `${stringNumber[counter - 1]}${
                    stringNumber[counter]
                }`;
            } else {
                tempStr = stringNumber[counter];
            }
        } else {
            tempStr = stringNumber[counter];
        }

        resultString = unicNumbers[tempStr];
        if (resultString === undefined) {
            resultString =
                unicNumbers[tempStr[0] + "0"] + " " + unicNumbers[tempStr[1]];
        }
        counter -= 2;

        if (counter > 0) {
            if (stringNumber[counter - 1] !== "0") {
                tempStr = stringNumber[counter - 1] + stringNumber[counter];
                resultString =
                    unicNumbers[tempStr] + " hundred " + resultString;
            }
        } else if (counter === 0) {
            tempStr = stringNumber[counter];
            resultString = unicNumbers[tempStr] + " hundred " + resultString;
        }
        if (resultString.includes("zero") && resultString.length > 4) {
            resultString = resultString.replace("zero", "").trim();
        }
        return resultString;
    };
    return converter(number);
};
