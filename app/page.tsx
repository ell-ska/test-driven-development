'use client'

import { useState } from 'react'

import { generateGame } from '@/utils'
import CorrectGuessesInARow from '@/components/CorrectGuessesInARow'
import ColorToGuess from '@/components/ColorToGuess'
import ColorOptions from '@/components/ColorOptions'
import WrongGuess from '@/components/WrongGuess'
import type { gameColor } from '@/types'

const initialGame: gameColor = {
  correct: '235789',
  options: ['235789', 'ED1C24', 'F1D302']
}

const Home = () => {
  const [currentGame, setCurrentGame] = useState<gameColor>(initialGame)
  const [correctGuesses, setCorrectGuesses] = useState(0)
  const [isWrongGuess, setIsWrongGuess] = useState(false)

  const submitGuess = (option: string) => {
    if (option === currentGame.correct) {
      setCorrectGuesses(correctGuesses + 1)
      setCurrentGame(generateGame())
    } else {
      setIsWrongGuess(true)
      setCorrectGuesses(0)
    }
  }

  return (
    <main data-testid='app' className='flex flex-col items-center justify-center grow px-4'>
      <CorrectGuessesInARow correctGuessesInARow={correctGuesses} />
      <ColorToGuess correctColor={currentGame.correct} />
      <ColorOptions submitGuess={submitGuess} colors={currentGame.options} />
      {isWrongGuess && <WrongGuess setIsWrongGuess={setIsWrongGuess} />}
    </main>
  )
}

export default Home
