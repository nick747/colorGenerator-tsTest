function generateColor() {
    var hexColor = '';
    for (var i = 0; i < 6; i++) {
        var randomDigit = Math.floor(Math.random() * 16);
        hexColor += randomDigit.toString(16);
    }
    return hexColor;
}
function changeColorText() {
    var color1 = document.getElementById('color1');
    var color1Hex = document.getElementById('color1Hex');
    if (color1) {
        color1.style.backgroundColor = "#".concat(generateColor());
    }
    if (color1Hex) {
        color1Hex.innerHTML = "#".concat(generateColor());
    }
    var color2 = document.getElementById('color2');
    var color2Hex = document.getElementById('color2Hex');
    if (color2) {
        color2.style.backgroundColor = "#".concat(generateColor());
    }
    if (color2Hex) {
        color2Hex.innerHTML = "#".concat(generateColor());
    }
    var color3 = document.getElementById('color3');
    var color3Hex = document.getElementById('color3Hex');
    if (color3) {
        color3.style.backgroundColor = "#".concat(generateColor());
    }
    if (color3Hex) {
        color3Hex.innerHTML = "#".concat(generateColor());
    }
    var color4 = document.getElementById('color4');
    var color4Hex = document.getElementById('color4Hex');
    if (color4) {
        color4.style.backgroundColor = "#".concat(generateColor());
    }
    if (color4Hex) {
        color4Hex.innerHTML = "#".concat(generateColor());
    }
}
function button() {
    changeColorText();
}
