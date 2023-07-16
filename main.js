function generateColor() {
    var hexColor = '';
    for (var i = 0; i < 6; i++) {
        var randomDigit = Math.floor(Math.random() * 16);
        hexColor += randomDigit.toString(16);
    }
    return hexColor;
}
function changeColorText() {
    var colorContainer = document.getElementById('color');
    var colorHex = document.getElementById('colorHex');
    if (colorContainer) {
        colorContainer.style.backgroundColor = "#".concat(generateColor());
    }
    if (colorHex) {
        colorHex.innerHTML = "#".concat(generateColor());
    }
}
function button() {
    changeColorText();
}
