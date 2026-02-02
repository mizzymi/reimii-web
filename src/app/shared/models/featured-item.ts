export type AvailabilityKey =
    | 'featured.availability.available'
    | 'featured.availability.comingSoon'
    | 'featured.availability.beta';

export type FeaturedItem = {
    id: string;
    name: string;
    category: string;
    description: string;
    chips: string[];
    image: string;
    availability: AvailabilityKey;
    rating: number;
    kindIcon: string;
    link: string;
};

export type AppExtended = FeaturedItem & {
  tagline?: string;
  longDescription?: string;
  features?: string[];
  screenshots: string[];
};