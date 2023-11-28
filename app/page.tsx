import CorrectGuessesInARow from '@/components/CorrectGuessesInARow'
import ColorToGuess from '@/components/ColorToGuess'
import ColorOptions from '@/components/ColorOptions'

const Home = () => {
  return (
    <main className='flex flex-col items-center justify-center grow px-4'>
      <CorrectGuessesInARow correctGuessesInARow={32} />
      <ColorToGuess correctColor='CA9CE1' />
      <ColorOptions colors={["ABD123", "3FA12A", "DAF378"]} />
    </main>
  )
}

export default Home
