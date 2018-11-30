// YOUR CODE BELOW
const crazyCaps = (text) => {
    const sanitizedText = text.toLowerCase();
    let newText = '';

    for (let i = 0; i < sanitizedText.length; i++) {

        if (i % 2 === 1) newText += sanitizedText[i].toUpperCase();
        else newText += text[i];
    }

    return newText;
}

console.log(crazyCaps('fullstack is amazing'));