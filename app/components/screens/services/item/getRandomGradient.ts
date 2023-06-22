const gradients = [
  ['#433CA2', '#4A73C0'],
  ['#0061ff', '#60efff'],
  ['#ff930f', '#fff95b'],
  ['#f5e6ad', '#f13c77'],
  ['#82f4b1', '#30c67c'],
  ['#f4119e', '#4a313e'],
  ['#ff0f7b', '#f89b29'],
  ['#d4acfb', '#b84fce'],
]

export const getRandomGradient = () => {
  const min = 0
  const max = gradients.length - 1

  const randomNumber = Math.floor(Math.random() * (max - min) + min)

  return gradients[randomNumber]
}