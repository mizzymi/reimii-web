import { AppExtended } from "../../../shared/models/featured-item";

export const gamesFeatured: AppExtended[] = [
    {
        id: 'game-akaladrom',
        name: 'Akaladrom',
        category: 'featured.games.game-akaladrom.category',
        description: 'featured.games.game-akaladrom.description',
        chips: [
            'featured.games.game-akaladrom.chips.pc',
            'featured.games.game-akaladrom.chips.android',
        ],
        image: 'assets/demo/game-1/game-1.png',
        availability: 'featured.availability.comingSoon',
        rating: 5,
        kindIcon: 'sports_esports',
        link: '/games/game-akaladrom',

        tagline: 'featured.games.game-akaladrom.tagline',
        longDescription: 'featured.games.game-akaladrom.longDescription',
        features: [
            'featured.games.game-akaladrom.features.0',
            'featured.games.game-akaladrom.features.1',
            'featured.games.game-akaladrom.features.2',
            'featured.games.game-akaladrom.features.3',
            'featured.games.game-akaladrom.features.4',
        ],
        screenshots: [
            'assets/demo/game-1/0.png',
            'assets/demo/game-1/1.png',
            'assets/demo/game-1/2.png',
            'assets/demo/game-1/3.png',
            'assets/demo/game-1/4.png',
        ],
    },
];
