export type Availability = 'Disponible' | 'Próximamente';

export type FeaturedItem = {
    id: string;
    name: string;
    category: string;
    description: string;
    chips: string[];
    image: string;
    availability: Availability;
    rating: number;
    kindIcon: string;
    link: string;
};
