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