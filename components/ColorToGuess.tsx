type ColorToGuessProps = {
  children?: React.ReactNode
  correctColor: string
}

const ColorToGuess = ({ children, correctColor }: ColorToGuessProps) => {
  return (
    <div
      data-testid='color-to-guess'
      style={{ backgroundColor: `#${correctColor}` }}
      className='h-64 w-64 sm:h-80 sm:w-80 rounded-full relative'
    >
      {children}
    </div>
  )
}

export default ColorToGuess