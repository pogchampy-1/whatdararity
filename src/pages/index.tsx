import type { NextPage } from 'next'
import { rarities } from '../utils/constants'
import { Button } from '../components/Button'
import { getRandomCard } from '../utils/getRandomCard'
import { trpc } from '../utils/trpc'

const Home: NextPage = () => {
  const cards = trpc.getCards.useQuery();

  if (!cards.data || cards.isLoading) return null;

  const card = cards.data[getRandomCard()];

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center gap-6'>
      <div className='text-2xl text-center'>What rarity is this card?</div>
      <div className="border rounded p-8 max-w-2xl items-center">
        <div className="w-64 h-64 flex flex-col">
          <img src={card.iconUrls.medium} alt={card.name} className='w-full h-full' />
          <div className='text-xl text-center'>{card.name}</div>
        </div>
      </div>
      <div className='flex gap-4'>
        {rarities.map((rarity, index) => (
          <Button variant={rarity} key={index}>{rarity}</Button>
        ))}
      </div>
    </div>
  )
}

export default Home
