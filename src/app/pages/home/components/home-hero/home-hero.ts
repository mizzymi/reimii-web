import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';

type Stat = { value: string; label: string };

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [RouterLink, MatIconModule, MatButtonModule, NgFor],
  templateUrl: './home-hero.html',
  styleUrl: './home-hero.scss',
})
export class HomeHero {
  @Input() pillText = 'Juegos y apps que respetan tu tiempo';
  @Input() logoSrc = 'assets/logo-text.png';

  @Input() primaryCtaText = 'Ver Juegos';
  @Input() primaryCtaLink = '/games';

  @Input() secondaryCtaText = 'Conocer más';
  @Input() secondaryCtaLink = '/studio';

  @Input() stats: Stat[] = [
    { value: '5+', label: 'Juegos lanzados' },
    { value: '1K+', label: 'Descargas' },
    { value: '4.8', label: 'Rating promedio' },
    { value: '25+', label: 'Equipo creativo' },
  ];
}
