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
      role='alert'
      className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg bg-slate-900 w-min px-4 py-4 rounded-full whitespace-nowrap select-none'
    >
      wrong guess
    </p>
  )
}

export default WrongGuess