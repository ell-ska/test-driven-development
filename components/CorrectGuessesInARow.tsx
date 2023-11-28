type CorrectGuessesInARowProps = {
  correctGuessesInARow: number
}

const CorrectGuessesInARow = ({ correctGuessesInARow }: CorrectGuessesInARowProps) => {
  return (
    <h3
      data-testid='correct-guesses-in-a-row-text'
      className='mb-4 text-lg'
    >
      correct guesses in a row:{' '}
      <span
        className='font-bold'
        data-testid='correct-guesses-in-a-row-value'
      >{correctGuessesInARow}</span>
    </h3>
  )
}

export default CorrectGuessesInARow