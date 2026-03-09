import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';

/**
 * Apps page placeholder.
 */
@Component({
    selector: 'app-apps-page',
    standalone: true,
    templateUrl: './apps-page.component.html',
    styleUrl: './apps-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppsPageComponent {
    private readonly seoService = inject(SeoService);

    constructor() {
        this.seoService.setPageMeta(
            'Apps',
            'Explore Reimii apps and digital tools with a cleaner and more credible product presentation.',
        );
    }
}