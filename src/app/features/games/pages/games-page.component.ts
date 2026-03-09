import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';

/**
 * Games page placeholder.
 */
@Component({
    selector: 'app-games-page',
    standalone: true,
    templateUrl: './games-page.component.html',
    styleUrl: './games-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesPageComponent {
    private readonly seoService = inject(SeoService);

    constructor() {
        this.seoService.setPageMeta(
            'Games',
            'Explore Reimii games and interactive experiences presented with a sharper and more premium interface.',
        );
    }
}