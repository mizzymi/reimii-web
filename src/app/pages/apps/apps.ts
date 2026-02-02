import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoPipe } from '@ngneat/transloco';
import { AppExtended } from '../../shared/models/featured-item';
import { appsFeatured } from './data/apps.data';

@Component({
  selector: 'app-apps',
  standalone: true,
  imports: [NgFor, RouterLink, MatIconModule, TranslocoPipe],
  templateUrl: './apps.html',
  styleUrl: './apps.scss',
})
export class Apps {
  apps: AppExtended[] = appsFeatured;

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
