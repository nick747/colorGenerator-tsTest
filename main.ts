const generateColor = (): string => {
    let hexColor: string = '';

    for (let i = 0; i < 6; i++) {
        const randomDigit = Math.floor(Math.random() * 16);
        hexColor += randomDigit.toString(16);
    }

    return hexColor;
}


const changeColorText = () => {
    let palette: string[] = [];
    let colorContainers = document.querySelectorAll('.colorContainer') as NodeListOf<HTMLElement>;
    
    colorContainers.forEach((container) => {
        if (container) {
            let generatedColorHex;
            do {
                generatedColorHex = generateColor();     
            } while (!palette.includes(generatedColorHex));

            palette.push(generatedColorHex);
            
            container.style.backgroundColor = `#${generatedColorHex}`;

            let hex = container.querySelector('.colorHex');
            if (hex) {
                hex.innerHTML = `#${generatedColorHex}`;
            }
        }
    })
}

function button() {    
    changeColorText();
}
