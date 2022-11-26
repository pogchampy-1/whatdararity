import React from 'react'
enum Variant  {
    Common = 'Common',
    Rare = 'Rare', 
    Epic = 'Epic',
    Legendary = 'Legendary', 
    Champion = 'Champion'
}

export type VariantStrings = keyof typeof Variant;

export const Button = ({ children, variant }: { children: React.ReactNode; variant: VariantStrings;  }) => {
    const colors = {
        [Variant.Common]: 'bg-gray-500 text-black px-4 py-2 rounded hover:bg-gray-400',
        [Variant.Rare]: 'bg-orange-500 text-black px-4 py-2 rounded hover:bg-orange-400',
        [Variant.Epic]: 'bg-purple-500 text-black px-4 py-2 rounded hover:bg-purple-400',
        [Variant.Legendary]: 'bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400',
        [Variant.Champion]: 'bg-red-500 text-black px-4 py-2 rounded hover:bg-red-400',
    }
    return (
    <button className={`${colors[variant]}`}>{children}</button>
  )
}