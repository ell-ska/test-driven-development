import ColorToGuess from '@/components/ColorToGuess'

const Home = () => {
  return (
    <main className='flex flex-col items-center justify-center grow'>
      <ColorToGuess correctColor='CA9CE1' />
    </main>
  )
}

export default Home
