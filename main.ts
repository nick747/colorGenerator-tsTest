function generateColor(): string {
    let hexColor: string = '';

    for (let i = 0; i < 6; i++) {
        const randomDigit = Math.floor(Math.random() * 16);
        hexColor += randomDigit.toString(16);
    }

    return hexColor;
}


function changeColorText(): void {
    let colorContainer = document.getElementById('color') as HTMLElement;
    let colorHex = document.getElementById('colorHex');

    if (colorContainer) {
        colorContainer.style.backgroundColor = `#${generateColor()}`;
    }

    if (colorHex) {
        colorHex.innerHTML = `#${generateColor()}`;
    }
}

function button() {
    changeColorText();
}
