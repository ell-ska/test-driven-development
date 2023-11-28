import CorrectGuessesInARow from '@/components/CorrectGuessesInARow'
import ColorToGuess from '@/components/ColorToGuess'
import Color from '@/components/Color'

const Home = () => {
  return (
    <main className='flex flex-col items-center justify-center grow'>
      <CorrectGuessesInARow correctGuessesInARow={32} />
      <ColorToGuess correctColor='CA9CE1' />
      <Color color='CA9CE1' />
    </main>
  )
}

export default Home
