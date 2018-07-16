const permutator = (inputArr) => {
    let result = [];
    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m)
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next))
            }
        }
    }
    permute(inputArr)
    return result;
}

const generator = (number) => {
    let text = "";
    let possible = "x*";
    for (let i = 0; i < number; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text
}

module.exports = {
    exerciseOne: (data, res) => {
        let number = parseInt(data.data, 10)
        let text = generator(number);
        res .status(200).json({success: true, data: text});
    },
    exerciseTwo: (data, res) => {

        let CharInArray = data.data.split("");
        let WithBinary = [];

        for (let i = 0; i < CharInArray.length; i++) {
            const element = CharInArray[i];
            WithBinary.push(element.replace(/x/gi, Math.floor(Math.random() * 2)));
        }

        let result = permutator(WithBinary); 
        res.status(200).json({ success: true, data:result })
    }
}