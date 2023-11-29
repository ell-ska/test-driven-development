import type { color } from '@/types'

type ColorProps = {
  submitGuess: (option: color) => void
  color: color
  isLoading: boolean
}

const Color = ({ submitGuess, color, isLoading }: ColorProps) => {
  if (isLoading) return <Color.Skeleton />

  return (
    <button
      onClick={() => submitGuess(color)}
      className={'h-16 w-full px-4 sm:min-w-[12rem] sm:w-max text-lg bg-slate-600 hover:bg-slate-700 rounded-full select-none whitespace-nowrap'}
    >
      {color.name}
    </button>
  )
}

const ColorSkeleton = () => {
  return <div className='h-16 w-full sm:min-w-[12rem] bg-slate-700 animate-pulse rounded-full' />
}

Color.Skeleton = ColorSkeleton
export default Color