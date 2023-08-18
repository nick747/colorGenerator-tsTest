function generateColor(): string {
    let hexColor: string = '';

    for (let i = 0; i < 6; i++) {
        const randomDigit = Math.floor(Math.random() * 16);
        hexColor += randomDigit.toString(16);
    }

    return hexColor;
}



function changeColorText(): void {
    let colorContainers = document.querySelectorAll('colorContainer') as NodeListOf<HTMLElement>;
    let colorHexs = document.querySelectorAll('colorHex');

    colorContainers.forEach((container) => {
        if (container) {
            container.style.backgroundColor = `#${generateColor()}`;
        }
    })

    colorHexs .forEach((hex) => {
        if (hex) {
            hex.innerHTML = `#${generateColor()}`;
        }
    })
}

function button() {
    changeColorText();
}
