function divisionFunction() {
    var numberOne = prompt("What is your first number?");
    var numberTwo = prompt("What is your second number?");
    if (typeof numberOne == 'object' || typeof numberTwo == 'object' || !numberOne.length || !numberTwo.length || isNaN(numberOne) || isNaN(numberTwo)) {
        return alert('You must enter a number.');
    } else if (numberTwo == '0') {
        return alert('You cannot divide by zero.');
    }
    alert(`Your answer: ${parseInt(numberOne) / parseInt(numberTwo)}`);
}
