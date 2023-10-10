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

export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.09 * index,
    },
  }),
};