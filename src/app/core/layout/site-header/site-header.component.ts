import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SITE_CONFIG } from '../../config/site.config';

/**
 * Global site header with main navigation.
 */
@Component({
    selector: 'app-site-header',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './site-header.component.html',
    styleUrl: './site-header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeaderComponent {
    protected readonly brandName = SITE_CONFIG.brandName;
    protected readonly brandSubtitle = SITE_CONFIG.brandSubtitle;
    protected readonly navigation = SITE_CONFIG.navigation;
    isMobileMenuOpen = false;

    toggleMobileMenu(): void {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }

    closeMobileMenu(): void {
        this.isMobileMenuOpen = false;
    }
}