import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_CONFIG } from '../../config/site.config';

/**
 * Global site footer.
 */
@Component({
    selector: 'app-site-footer',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './site-footer.component.html',
    styleUrl: './site-footer.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooterComponent {
    protected readonly brandName = SITE_CONFIG.brandName;
    protected readonly navigation = SITE_CONFIG.navigation;
}