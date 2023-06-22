export const getRandomCardNumber = () => {
  let cardNumber = ''

  for (let i = 0; i < 4; i++) {
    const random4Number = Math.round(1000 + Math.random() * 9000)

    if (i !== 0) cardNumber += ' '

    cardNumber += random4Number
  }

  return cardNumber
}