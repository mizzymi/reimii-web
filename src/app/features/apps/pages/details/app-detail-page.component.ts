import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectItem } from '../../../../core/models/ProjectItem';
import { apps } from '../../../../core/data/data';

@Component({
    selector: 'app-app-detail-page',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './app-detail-page.component.html',
    styleUrl: '../../../../shared/ui/detailStyles/style.scss',
})
export class AppDetailPageComponent {
    private readonly route = inject(ActivatedRoute);

    private readonly slug = signal(this.route.snapshot.paramMap.get('slug') ?? '');

    readonly app = computed<ProjectItem | undefined>(() =>
        apps.find((item) => item.slug === this.slug())
    );
}