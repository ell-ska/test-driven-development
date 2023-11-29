type ColorProps = {
  submitGuess: (option: string) => void
  color: string
}

const Color = ({ submitGuess, color }: ColorProps) => {
  return (
    <button
      onClick={() => submitGuess(color)}
      className='py-4 px-8 text-lg bg-slate-600 hover:bg-slate-700 rounded-full'
    >
      <span className="before:content-['#']">{color}</span>
    </button>
  )
}

export default Color