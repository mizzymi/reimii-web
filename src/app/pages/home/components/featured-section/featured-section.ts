import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FeaturedItem } from '../../../../shared/models/featured-item';

@Component({
  selector: 'app-featured-section',
  standalone: true,
  imports: [RouterLink, NgFor, MatIconModule],
  templateUrl: './featured-section.html',
  styleUrl: './featured-section.scss',
})
export class FeaturedSection {
  @Input() titleLine1 = '';
  @Input() titleLine2 = '';
  @Input() viewAllLink = '/';
  @Input() items: FeaturedItem[] = [];

  trackById(_: number, item: FeaturedItem) {
    return item.id;
  }

  isSoon(item: FeaturedItem) {
    return item.availability === 'Próximamente';
  }
}
