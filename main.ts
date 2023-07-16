function generateColor(): string {
    let hexColor: string = '';

    for (let i = 0; i < 6; i++) {
        const randomDigit = Math.floor(Math.random() * 16);
        hexColor += randomDigit.toString(16);
    }

    return hexColor;
}


function changeColorText(): void {
    let color1 = document.getElementById('color1') as HTMLElement
    let color1Hex = document.getElementById('color1Hex');

    if (color1) {
        color1.style.backgroundColor = `#${generateColor()}`;
    }

    if (color1Hex) {
        color1Hex.innerHTML = `#${generateColor()}`;
    }    

    let color2 = document.getElementById('color2') as HTMLElement
    let color2Hex = document.getElementById('color2Hex');

    if (color2) {
        color2.style.backgroundColor = `#${generateColor()}`;
    }

    if (color2Hex) {
        color2Hex.innerHTML = `#${generateColor()}`;
    }

    let color3 = document.getElementById('color3') as HTMLElement
    let color3Hex = document.getElementById('color3Hex');

    if (color3) {
        color3.style.backgroundColor = `#${generateColor()}`;
    }

    if (color3Hex) {
        color3Hex.innerHTML = `#${generateColor()}`;
    }

    let color4 = document.getElementById('color4') as HTMLElement
    let color4Hex = document.getElementById('color4Hex');

    if (color4) {
        color4.style.backgroundColor = `#${generateColor()}`;
    }

    if (color4Hex) {
        color4Hex.innerHTML = `#${generateColor()}`;
    }
    
}

function button() {
    changeColorText();
}
