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
      setIsWrongGuess(false)
      setCorrectGuesses(correctGuesses + 1)
      setCurrentGame(generateGame())
    } else {
      setIsWrongGuess(true)
      setCorrectGuesses(0)
    }
  }

  return (
    <main data-testid='app' className='grow flex flex-col justify-end items-center sm:justify-center p-4'>
      <CorrectGuessesInARow correctGuessesInARow={correctGuesses} />
      <ColorToGuess correctColor={currentGame.correct} >
        {isWrongGuess && <WrongGuess setIsWrongGuess={setIsWrongGuess} />}
      </ColorToGuess>
      <ColorOptions submitGuess={submitGuess} colors={currentGame.options} />
    </main>
  )
}

export default Home
