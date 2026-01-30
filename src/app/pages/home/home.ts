import { Component } from '@angular/core';
import { HomeHero } from './components/home-hero/home-hero';
import { FeaturedSection } from './components/featured-section/featured-section';
import { FeaturedItem } from '../../shared/models/featured-item';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHero, FeaturedSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  appsFeatured: FeaturedItem[] = [
    {
      id: 'app-focus-timer',
      name: 'Focus Timer Pro',
      category: 'Productividad',
      description: 'App de productividad minimalista. Sin notificaciones molestas.',
      chips: ['iOS', 'Android'],
      image: 'assets/demo/app-1.jpg',
      availability: 'Disponible',
      rating: 4.9,
      kindIcon: 'smartphone',
      link: '/apps',
    },
    {
      id: 'app-habit-flow',
      name: 'Habit Flow',
      category: 'Hábitos',
      description: 'Rutinas simples, feedback claro y progreso visible sin fricción.',
      chips: ['iOS', 'Android'],
      image: 'assets/demo/app-2.jpg',
      availability: 'Disponible',
      rating: 4.7,
      kindIcon: 'smartphone',
      link: '/apps',
    },
    {
      id: 'app-notes-sprint',
      name: 'Notes Sprint',
      category: 'Notas',
      description: 'Notas rápidas con organización limpia y búsqueda instantánea.',
      chips: ['iOS', 'Android', 'Web'],
      image: 'assets/demo/app-3.jpg',
      availability: 'Próximamente',
      rating: 4.8,
      kindIcon: 'smartphone',
      link: '/apps',
    },
  ];

  gamesFeatured: FeaturedItem[] = [
    {
      id: 'game-shadow-runner',
      name: 'Shadow Runner',
      category: 'Roguelite / Acción',
      description: 'Roguelite de acción rápida con mecánicas justas y alto rejugar.',
      chips: ['PC', 'Nintendo Switch', 'PlayStation'],
      image: 'assets/demo/game-1.jpg',
      availability: 'Disponible',
      rating: 4.7,
      kindIcon: 'sports_esports',
      link: '/games',
    },
    {
      id: 'game-card-clash',
      name: 'Card Clash',
      category: 'TCG / Estrategia',
      description: 'TCG con cartas legibles y sistema económico justo.',
      chips: ['iOS', 'Android', 'PC'],
      image: 'assets/demo/game-2.jpg',
      availability: 'Próximamente',
      rating: 4.8,
      kindIcon: 'sports_esports',
      link: '/games',
    },
    {
      id: 'game-neon-drift',
      name: 'Neon Drift',
      category: 'Arcade / Carreras',
      description: 'Arcade rápido, control fino y sesiones cortas perfectas para repetir.',
      chips: ['PC', 'Xbox', 'PlayStation'],
      image: 'assets/demo/game-3.jpg',
      availability: 'Disponible',
      rating: 4.9,
      kindIcon: 'sports_esports',
      link: '/games',
    },
  ];
}
