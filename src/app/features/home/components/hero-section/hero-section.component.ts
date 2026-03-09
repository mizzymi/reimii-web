import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrimaryButtonComponent } from '../../../../shared/ui/primary-button/primary-button.component';
import { HOME_HERO } from '../../data/home.data';

/**
 * Main hero section displayed at the top of the home page.
 */
@Component({
    selector: 'app-hero-section',
    standalone: true,
    imports: [PrimaryButtonComponent],
    templateUrl: './hero-section.component.html',
    styleUrl: './hero-section.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
    protected readonly hero = HOME_HERO;
}