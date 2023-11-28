type ColorToGuessProps = {
  correctColor: string
}

const ColorToGuess = ({ correctColor }: ColorToGuessProps) => {
  return (
    <div
      data-testid='color-to-guess'
      style={{ backgroundColor: `#${correctColor}` }}
      className='h-80 w-80 rounded-full'
    />
  )
}

export default ColorToGuess