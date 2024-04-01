/**
 * function  retrun
 * 
*/

function oddNumbar(a, b) {
        const sum = a + b;
        return sum;
};

const sumNumbar = oddNumbar(3, 4);
// console.log(sumNumbar);

function idol(numbar1, number2, numbar3){
    const oddNumbar = numbar1 * number2;
    const sumNumbar = oddNumbar + numbar3;
    const maltifuly = sumNumbar % 2;
    return maltifuly;
};

const numbar = idol(3, 4, 5);
console.log(numbar);
