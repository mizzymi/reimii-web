import { FeaturedItem } from '../../../shared/models/featured-item';

export const gamesFeatured: FeaturedItem[] = [
    {
        id: 'game-akaladrom',
        name: 'Akaladrom',
        category: 'featured.games.game-akaladrom.category',
        description: 'featured.games.game-akaladrom.description',
        chips: [
            'featured.games.game-akaladrom.chips.pc',
            'featured.games.game-akaladrom.chips.android',
        ],
        image: 'assets/demo/game-1.png',
        availability: 'featured.availability.comingSoon',
        rating: 5,
        kindIcon: 'sports_esports',
        link: '/games',
    },
];
