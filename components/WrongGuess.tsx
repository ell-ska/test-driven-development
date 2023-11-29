import { useEffect } from 'react'

type WrongGuessProps = {
  setIsWrongGuess: React.Dispatch<React.SetStateAction<boolean>>
}

const WrongGuess = ({ setIsWrongGuess }: WrongGuessProps) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsWrongGuess(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [setIsWrongGuess])

  return (
    <p
      data-testid='wrong-guess'
      className='absolute left-4 bottom-4 text-lg bg-slate-900 px-4 py-2 rounded-full'
    >
      wrong guess
    </p>
  )
}

export default WrongGuess