import Color from './Color'

type ColorOptionsProps = {
  submitGuess: (option: string) => void
  colors: string[]
}

const ColorOptions = ({ submitGuess, colors }: ColorOptionsProps) => {
  return (
    <div
      data-testid='color-options'
      className='flex flex-col w-full sm:w-auto sm:flex-row gap-4 mt-8'
    >
      {colors.map(color => <Color submitGuess={submitGuess} key={color} color={color} />)}
    </div>
  )
}

export default ColorOptions