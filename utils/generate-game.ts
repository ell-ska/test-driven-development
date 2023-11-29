import type { color } from '@/types'

const baseUrl = 'https://www.thecolorapi.com/id?hex='

const generateHexColor = () => (Math.random() * 0xFFFFFF<<0).toString(16).toUpperCase()
const generateAnswer = <T>(options: T[]) => options[Math.floor(Math.random() * options.length)]

export const generateGame = async (amountOfOptions: number = 3) => {
  let options: color[] = []

  while (options.length < amountOfOptions) {
    const color = generateHexColor()
    if (!options.map(option => option.value).includes(color)) {
      try {
        const response = await fetch(baseUrl + color)
        const data = await response.json()

        options = [...options, { name: data.name.value, value: data.hex.value.replace('#', '') }]
      } catch (error) {
        console.log(error)
      }
    }
  }

  return {
    options,
    correct: generateAnswer(options)
  }
}