import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';

/**
 * Studio page placeholder.
 */
@Component({
    selector: 'app-studio-page',
    standalone: true,
    templateUrl: './studio-page.component.html',
    styleUrl: './studio-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudioPageComponent {
    private readonly seoService = inject(SeoService);

    constructor() {
        this.seoService.setPageMeta(
            'Studio',
            'Learn more about Reimii, the studio vision, the design approach, and the architecture behind the products.',
        );
    }
}