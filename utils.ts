import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

const generateHexColor = () => (Math.random() * 0xFFFFFF<<0).toString(16).toUpperCase()

const generateAnswer = (options: string[]) => options[Math.floor(Math.random() * options.length)]

export const generateGame = (amountOfOptions: number = 3) => {
  let options: string[] = []

  while (options.length < amountOfOptions) {
    const color = generateHexColor()
    if (!options.includes(color)) options.push(color)
  }

  return {
    options,
    correct: generateAnswer(options)
  }
}