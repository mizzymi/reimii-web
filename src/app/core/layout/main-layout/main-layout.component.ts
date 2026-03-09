import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteFooterComponent } from '../site-footer/site-footer.component';
import { SiteHeaderComponent } from '../site-header/site-header.component';

/**
 * Main layout wrapping all pages with common site chrome.
 */
@Component({
    selector: 'app-main-layout',
    standalone: true,
    imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent],
    templateUrl: './main-layout.component.html',
    styleUrl: './main-layout.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent { }