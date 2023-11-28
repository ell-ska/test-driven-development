type ColorProps = {
  color: string
}

const Color = ({ color }: ColorProps) => {
  return (
    <button
      className='py-4 px-8 text-lg bg-slate-600 hover:bg-slate-700 rounded-full'
    >
      <span className="before:content-['#']">{color}</span>
    </button>
  )
}

export default Color