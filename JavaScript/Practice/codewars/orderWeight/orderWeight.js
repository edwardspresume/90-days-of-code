console.clear();

let num = '122';

for (let i = 0; i < num.length; i++) {

    let curr = Number(num[i]);
    let nextNum = Number(num[i + 1]);

    if (i < num.length - 1) {

        console.log(curr + nextNum);
    }

}

const orderWeight = (weights) => {

}