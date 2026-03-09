import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Small informational feature card.
 */
@Component({
    selector: 'app-feature-card',
    standalone: true,
    templateUrl: './feature-card.component.html',
    styleUrl: './feature-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCardComponent {
    readonly title = input.required<string>();
    readonly description = input.required<string>();
}