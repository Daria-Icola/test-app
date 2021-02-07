
const getWordsArr = str => {
    const regexp = /-|_/g
    const symb = str.match(regexp)[0];

    return str.split(symb)
}


const toCamelCase = (str = '') => {
    const result = [];

    if(str !== ''){

        const wordsArr = getWordsArr(str)
        for (let i = 0; i < wordsArr.length; i++){
            let word = wordsArr[i];

            if (i !== 0){
            word = word.substr(0,1).toUpperCase() + word.substr(1);
            }

         result.push(word);
        }

        return result.join(' ');
    }

    return str;
}

export default toCamelCase;