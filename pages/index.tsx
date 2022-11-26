import type { NextPage } from 'next'
import { rarities } from '../utils/constants'
import { Button, VariantStrings } from '../components/Button'

const Home: NextPage = () => {

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center gap-6'>
      <div className='text-2xl text-center'>What rarity is this card?</div>
      <div className="border rounded p-8 max-w-2xl items-center">
        <div className="w-16 h-16 bg-red-200" />
      </div>
      <div className='flex gap-4'>
        {rarities.map((rarity, index) => (
          <Button variant={rarity as VariantStrings} key={index}>{rarity}</Button>
        ))}
      </div>
    </div>
  )
}

export default Home
