import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';
import { TranslocoPipe } from '@ngneat/transloco';

type Stat = { value: string; label: string };

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [RouterLink, MatIconModule, MatButtonModule, NgFor, TranslocoPipe],
  templateUrl: './home-hero.html',
  styleUrl: './home-hero.scss',
})
export class HomeHero {
  @Input() pillText = 'home.hero.pill';
  @Input() logoSrc = 'logo-text.png';

  @Input() primaryCtaText = 'home.hero.ctaGames';
  @Input() primaryCtaLink = '/games';

  @Input() secondaryCtaText = 'home.hero.ctaMore';
  @Input() secondaryCtaLink = '/studio';

  @Input() stats: Stat[] = [
    { value: '3+', label: 'home.stats.games' },
    { value: '10+', label: 'home.stats.downloads' },
    { value: '4.8', label: 'home.stats.rating' },
    { value: '2', label: 'home.stats.team' },
  ];
}
