import { AppExtended } from "../../../shared/models/featured-item";

export const appsFeatured: AppExtended[] = [
  {
    id: 'app-ecopulse',
    name: 'EcoPulse',
    category: 'featured.apps.app-ecopulse.category',
    description: 'featured.apps.app-ecopulse.description',
    chips: ['featured.apps.app-ecopulse.chips.android'],
    image: 'assets/demo/app-1/app-1.png',
    availability: 'featured.availability.beta',
    rating: 4.8,
    kindIcon: 'eco',
    link: '/apps/app-ecopulse',

    tagline: 'featured.apps.app-ecopulse.tagline',
    longDescription: 'featured.apps.app-ecopulse.longDescription',
    features: [
      'featured.apps.app-ecopulse.features.0',
      'featured.apps.app-ecopulse.features.1',
      'featured.apps.app-ecopulse.features.2',
      'featured.apps.app-ecopulse.features.3',
      'featured.apps.app-ecopulse.features.4',
    ],
    screenshots: ['assets/demo/app-1/app-1.png'],
  },

  {
    id: 'app-habit-tracker',
    name: 'Habit Tracker',
    category: 'featured.apps.app-habit-tracker.category',
    description: 'featured.apps.app-habit-tracker.description',
    chips: ['featured.apps.app-habit-tracker.chips.android'],
    image: 'assets/demo/app-2/app-2.png',
    availability: 'featured.availability.available',
    rating: 4.7,
    kindIcon: 'check_circle',
    link: '/apps/app-habit-tracker',

    tagline: 'featured.apps.app-habit-tracker.tagline',
    longDescription: 'featured.apps.app-habit-tracker.longDescription',
    features: [
      'featured.apps.app-habit-tracker.features.0',
      'featured.apps.app-habit-tracker.features.1',
      'featured.apps.app-habit-tracker.features.2',
      'featured.apps.app-habit-tracker.features.3',
      'featured.apps.app-habit-tracker.features.4',
    ],
    screenshots: ['assets/demo/app-2/app-2.png'],
  },

  {
    id: 'app-aura-mood-tracker',
    name: 'Aura Mood Tracker',
    category: 'featured.apps.app-aura-mood-tracker.category',
    description: 'featured.apps.app-aura-mood-tracker.description',
    chips: ['featured.apps.app-aura-mood-tracker.chips.android'],
    image: 'assets/demo/app-3/app-3.png',
    availability: 'featured.availability.comingSoon',
    rating: 4.6,
    kindIcon: 'mood',
    link: '/apps/app-aura-mood-tracker',

    tagline: 'featured.apps.app-aura-mood-tracker.tagline',
    longDescription: 'featured.apps.app-aura-mood-tracker.longDescription',
    features: [
      'featured.apps.app-aura-mood-tracker.features.0',
      'featured.apps.app-aura-mood-tracker.features.1',
      'featured.apps.app-aura-mood-tracker.features.2',
      'featured.apps.app-aura-mood-tracker.features.3',
      'featured.apps.app-aura-mood-tracker.features.4',
    ],
    screenshots: [
      'assets/demo/app-3/0.jpg',
      'assets/demo/app-3/1.jpg',
      'assets/demo/app-3/2.jpg',
    ],
  },
];
