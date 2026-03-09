import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectItem } from '../../../../core/models/ProjectItem';
import { games } from '../../../../core/data/data';

@Component({
    selector: 'app-game-detail-page',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './game-detail-page.component.html',
    styleUrl: '../../../../shared/ui/detailStyles/style.scss',
})
export class GameDetailPageComponent {
    private readonly route = inject(ActivatedRoute);

    private readonly slug = signal(this.route.snapshot.paramMap.get('slug') ?? '');

    readonly game = computed<ProjectItem | undefined>(() =>
        games.find((item) => item.slug === this.slug())
    );
}