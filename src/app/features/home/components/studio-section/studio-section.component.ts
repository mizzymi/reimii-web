import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionTitleComponent } from '../../../../shared/ui/section-title/section-title.component';
import { FeatureCardComponent } from '../../../../shared/ui/feature-card/feature-card.component';
import { STUDIO_FEATURES } from '../../data/home.data';

/**
 * Studio summary section.
 */
@Component({
    selector: 'app-studio-section',
    standalone: true,
    imports: [SectionTitleComponent, FeatureCardComponent],
    templateUrl: './studio-section.component.html',
    styleUrl: './studio-section.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudioSectionComponent {
    protected readonly features = STUDIO_FEATURES;
}