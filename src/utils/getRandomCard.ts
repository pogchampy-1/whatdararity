import { TOTAL_CARDS } from "./constants"

export const getRandomCard: () => number = () => {
    const randomCard = Math.floor(Math.random() * TOTAL_CARDS) + 1;

    return randomCard;
}