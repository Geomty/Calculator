function multiplicationFunction() {
    var numberOne = prompt("What is your first number?");
    var numberTwo = prompt("What is your second number?");
    if (typeof numberOne == 'object' || typeof numberTwo == 'object' || !numberOne.length || !numberTwo.length || isNaN(numberOne) || isNaN(numberTwo)) {
        return alert('You must enter a number.');
    }
    alert(`Your answer: ${parseInt(numberOne) * parseInt(numberTwo)}`);
}
