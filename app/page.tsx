'use client'

import { useEffect, useState } from 'react'

import { generateGame } from '@/utils/generate-game'
import Header from '@/components/Header'
import CorrectGuessesInARow from '@/components/CorrectGuessesInARow'
import ColorToGuess from '@/components/ColorToGuess'
import ColorOptions from '@/components/ColorOptions'
import WrongGuess from '@/components/WrongGuess'
import type { color, game } from '@/types'

const Home = () => {
  const [currentGame, setCurrentGame] = useState<game | undefined>()
  const [correctGuesses, setCorrectGuesses] = useState(0)
  const [highScore, sethighScore] = useState(0)

  const [isWrongGuess, setIsWrongGuess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getInitialGame = async () => {
      setIsLoading(true)
      setCurrentGame(await generateGame())
      setIsLoading(false)
    }

    const score = localStorage.getItem('high-score')
    sethighScore(score ? JSON.parse(score) : 0)

    getInitialGame()
  }, [])

  const submitGuess = async (option: color) => {
    if (option.value === currentGame?.correct.value) {
      setIsWrongGuess(false)

      const score = correctGuesses + 1
      setCorrectGuesses(score)

      if (score > highScore) {
        localStorage.setItem('high-score', JSON.stringify(score))
        sethighScore(score)
      }

      setIsLoading(true)
      setCurrentGame(await generateGame())
      setIsLoading(false)
    } else {
      setIsWrongGuess(true)
      setCorrectGuesses(0)
    }
  }

  return (
    <>
      <Header highScore={highScore} />
      <main data-testid='app' className='grow flex flex-col justify-end items-center sm:justify-center p-4'>
        <CorrectGuessesInARow correctGuessesInARow={correctGuesses} />
        <ColorToGuess correctColor={currentGame?.correct.value}>
          {isWrongGuess && <WrongGuess setIsWrongGuess={setIsWrongGuess} />}
        </ColorToGuess>
        <ColorOptions submitGuess={submitGuess} colors={currentGame?.options} isLoading={isLoading} />
      </main>
    </>
  )
}

export default Home
