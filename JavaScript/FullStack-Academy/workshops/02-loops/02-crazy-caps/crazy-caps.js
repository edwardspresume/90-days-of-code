// YOUR CODE BELOW
const crazyCaps = (text) => {
    let newText = '';

    for (let i = 0; i < text.length; i++) {

        if (i % 2 === 1) newText += text[i].toUpperCase();

        else newText += text[i];
    }

    return newText;
}

console.log(crazyCaps('fullstack is amazing'));