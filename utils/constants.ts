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