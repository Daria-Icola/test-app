
const toPhoneNumber = phone => {
    let result = '7'
    const phoneArr = phone.split('')

    for (let i = 0; i < 10; i++){
        if (i === 0){
            result += ' ('
            result += phoneArr[i]
        }
        if(i >= 1 && i <= 2){
            result += phoneArr[i]
        }

        if (i === 3){
            result += ') '
            result += phoneArr[i]
        }

        if (i >= 4 && i <= 5){
        result += phoneArr[i]
        }

        if (i === 6){
            result += '-'
            result += phoneArr[i]
        }
        if (i >= 7 && i <= 10){
            result += phoneArr[i]
        }
}

    return result;
}

export default toPhoneNumber;