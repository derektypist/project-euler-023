// Function to Display Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if the input is valid
    if (isNaN(num) || num.toString().length == 0 || num<2 || num>28123 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 2 and 28123.`;
    } else {
        txt += `You have entered the number ${num}. <p>`;
        txt += `Sum of all the positive integers up to ${num} that cannot be written as the sum of two abundant numbers is ${sumOfNonAbundantNumbers(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

// Function to Perform Abundant Check
function abundantCheck(num) {
    let sum = 1;
    for (let i=2;i<=Math.sqrt(num);i++) {
        if (num%i===0) sum += i + +(i !== Math.sqrt(num) && num/i);
    }

    return sum > num;
}

/* 
    Function to find the sum of all the positive integers that cannot be
    written as the sum of two abundant numbers
    sumOfNonAbundantNumbers(10000) returns 3731004
    sumOfNonAbundantNumbers(15000) returns 4039939
    sumOfNonAbundantNumbers(20000) returns 4159710
    sumOfNonAbundantNumbers(28123) returns 4179871
*/
function sumOfNonAbundantNumbers(n) {
    let sum = 0;
    const memo = {};
    let abundantList = [];
    const checkSum = (num,stack,memo) => {
        for (let i=0;i<stack.length;i++) {
            if ((num-stack[i]) in memo) return true;
        }
        return false;
    };

    for (let i=1;i<=n;i++) {
        if (abundantCheck(i)) {
            abundantList.push(i);
            memo[i] = 1;
        }
        if (checkSum(i,abundantList,memo)) continue;
        sum += i;
    }
    return sum;
}
