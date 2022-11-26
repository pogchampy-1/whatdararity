import { ClashRoyaleAPI } from "@varandas/clash-royale-api";

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

export const api = new ClashRoyaleAPI(process.env.API_KEY!);

export const TOTAL_CARDS = 109;