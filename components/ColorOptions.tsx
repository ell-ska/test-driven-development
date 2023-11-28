import Color from './Color'

type ColorOptionsProps = {
  colors: string[]
}

const ColorOptions = ({ colors }: ColorOptionsProps) => {
  return (
    <div
      data-testid='color-options'
      className='flex flex-col w-full xs:w-auto xs:flex-row gap-4 mt-8'
    >
      {colors.map(color => <Color key={color} color={color} />)}
    </div>
  )
}

export default ColorOptions