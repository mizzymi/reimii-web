import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoPipe } from '@ngneat/transloco';
import { AppExtended } from '../../shared/models/featured-item';
import { gamesFeatured } from './data/games.data';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [NgFor, RouterLink, MatIconModule, TranslocoPipe],
  templateUrl: './games.html',
  styleUrl: './games.scss',
})
export class Games {
  games: AppExtended[] = gamesFeatured;

  trackById(_: number, item: AppExtended) {
    return item.id;
  }

  isSoon(item: AppExtended) {
    return item.availability === 'featured.availability.comingSoon';
  }

  isBeta(item: AppExtended) {
    return item.availability === 'featured.availability.beta'
  }
}
