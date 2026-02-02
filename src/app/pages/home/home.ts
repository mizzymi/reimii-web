import { Component } from '@angular/core';
import { FeaturedItem } from '../../shared/models/featured-item';
import { HomeHero } from './components/home-hero/home-hero';
import { FeaturedSection } from './components/featured-section/featured-section';
import { gamesFeatured } from './data/featured.data';
import { appsFeatured } from '../apps/data/apps.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHero, FeaturedSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  appsFeatured: FeaturedItem[] = appsFeatured.slice(0, 3);
  gamesFeatured: FeaturedItem[] = gamesFeatured.slice(0, 3);
}
