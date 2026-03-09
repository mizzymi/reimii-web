import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrimaryButtonComponent } from '../../../../shared/ui/primary-button/primary-button.component';
import { HOME_CTA } from '../../data/home.data';

/**
 * Final call-to-action section.
 */
@Component({
    selector: 'app-cta-section',
    standalone: true,
    imports: [PrimaryButtonComponent],
    templateUrl: './cta-section.component.html',
    styleUrl: './cta-section.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaSectionComponent {
    protected readonly cta = HOME_CTA;
}