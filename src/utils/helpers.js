export function capTitle(char) {
    let newWord = []
    for (let i = 0; i < char.length; i++) {
        if (i === 0) {
            let upperCase = char[i].toUpperCase()
            newWord.push(upperCase)
        } else {
            newWord.push(char[i])
        }
    }

    return newWord.join('')
}