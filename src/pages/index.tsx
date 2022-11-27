import type { NextPage } from 'next'
import { GameStatus, ICard, rarities, VariantStrings } from '../utils/constants'
import { Button } from '../components/Button'
import { getRandomCard } from '../utils/getRandomCard'
import React, { useEffect } from 'react'

const Home: NextPage = () => {
  const [card, setCard] = React.useState<ICard | undefined>(undefined);
  const [correctRarity, setCorrectRarity] = React.useState<VariantStrings | undefined>(undefined);
  const [gameStatus, setGameStatus] = React.useState<GameStatus | undefined>(undefined);
  const generateCard = async () => {
    const cards = await (await fetch('https://royaleapi.github.io/cr-api-data/json/cards.json', {
      method: 'GET'
    })).json() as ICard[];

    const genCard = cards[getRandomCard()];

    setCorrectRarity(genCard.rarity);
    setCard(genCard);
  };

  useEffect(() => {
    generateCard();
  }, [])

  const handleSubmission = (rarity: VariantStrings) => {
    if (rarity === correctRarity) {
      setGameStatus(GameStatus.Correct);
      generateCard();
    } else {
      setGameStatus(GameStatus.Wrong)
    }

    setTimeout(() => {
      setGameStatus(undefined);
    }, 500);
  }

  if (!card) return <div>Loading data...</div>

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center gap-6'>
      <div className='text-2xl text-center'>What rarity is this card?</div>
      <div className="border rounded p-8 max-w-2xl items-center">
        <div className="w-64 h-64 flex flex-col">
          <img src={`https://royaleapi.github.io/cr-api-assets/cards/${card?.key}.png`} alt={card?.name} className='w-full h-full' />
          <div className='text-xl text-center'>{card?.name}</div>
        </div>
      </div>
      <div className='flex gap-4'>
        {rarities.map((rarity, index) => (
          <Button handleSubmission={handleSubmission} variant={rarity} key={index}>{rarity}</Button>
        ))}
      </div>
      {gameStatus === GameStatus.Correct ? (
        <h3 className='text-lg text-green-400'>Correct</h3>
      ) : gameStatus === GameStatus.Wrong ? (
        <h3 className='text-lg text-red-400'>Wrong</h3>
      ) : null}
    </div>
  )
}

export default Home
