export enum Variant  {
    Common = 'Common',
    Rare = 'Rare', 
    Epic = 'Epic',
    Legendary = 'Legendary', 
    Champion = 'Champion'
}

export type VariantStrings = keyof typeof Variant;

export const rarities: VariantStrings[] = [
    'Common', 'Rare', 'Epic', 'Legendary', 'Champion' 
]

export enum GameStatus {
    Correct, 
    Wrong
}

export type ICard = {
    key: string;
    name: string;
    sc_key: string;
    elixir: string;
    type: string;
    rarity: VariantStrings;
    arena: number;
    description: string;
    id: number;
}

export const TOTAL_CARDS = 109;