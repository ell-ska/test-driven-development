type HeaderProps = {
  highScore: number
}

const Header = ({ highScore }: HeaderProps) => {
  return (
    <header className="absolute w-full grid grid-cols-3 py-4 px-8 items-center">
      <h1 className="text-xl col-span-full sm:col-span-1 sm:col-start-2 sm:justify-self-center">color guessing game</h1>
      <p className="col-span-full sm:col-span-1 sm:justify-self-end text-lg">high score: {highScore}</p>
    </header>
  )
}

export default Header