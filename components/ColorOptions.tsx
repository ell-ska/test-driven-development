import Color from './Color'
import type { color } from '@/types'

type ColorOptionsProps = {
  submitGuess: (option: color) => void
  colors: color[] | undefined
  isLoading: boolean
}

const ColorOptions = ({ submitGuess, colors, isLoading }: ColorOptionsProps) => {
  return (
    <div
      data-testid='color-options'
      className='flex flex-col w-full sm:w-auto sm:flex-row gap-4 mt-8'
    >
      {colors ? (
        colors.map(color => (
          <Color submitGuess={submitGuess} key={color.value} color={color} isLoading={isLoading} />)
        ) 
      ) : (
        Array.from({ length: 3 }, (_, i) => i).map(i => (
          <Color.Skeleton key={i} />
        ))
      )}
    </div>
  )
}

export default ColorOptions