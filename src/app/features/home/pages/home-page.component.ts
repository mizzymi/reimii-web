import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import { AppsSectionComponent } from '../components/apps-section/apps-section.component';
import { CtaSectionComponent } from '../components/cta-section/cta-section.component';
import { GamesSectionComponent } from '../components/games-section/games-section.component';
import { HeroSectionComponent } from '../components/hero-section/hero-section.component';
import { StudioSectionComponent } from '../components/studio-section/studio-section.component';

/**
 * Home page composition.
 */
@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [
        HeroSectionComponent,
        StudioSectionComponent,
        GamesSectionComponent,
        AppsSectionComponent,
        CtaSectionComponent,
    ],
    template: `
    <app-hero-section />
    <app-studio-section />
    <app-games-section />
    <app-apps-section />
    <app-cta-section />
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
    private readonly seoService = inject(SeoService);

    constructor() {
        this.seoService.setPageMeta(
            'Home',
            'Reimii is an independent studio focused on polished games, useful apps, and premium digital experiences.',
        );
    }
}