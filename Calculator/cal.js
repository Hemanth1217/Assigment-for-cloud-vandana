function appendToScreen(value) {
    document.getElementById("screen").innerHTML += value;
}

function clearScreen() {
    document.getElementById("screen").innerHTML = "";
}

function calculate() {
    const expression = document.getElementById("screen").innerHTML;
    try {
        const result = eval(expression);
        document.getElementById("screen").innerHTML = result;
    } catch (error) {
        document.getElementById("screen").innerHTML = "Error";
    }
}