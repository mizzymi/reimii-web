import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Reusable section heading block.
 */
@Component({
    selector: 'app-section-title',
    standalone: true,
    templateUrl: './section-title.component.html',
    styleUrl: './section-title.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionTitleComponent {
    readonly eyebrow = input.required<string>();
    readonly title = input.required<string>();
    readonly description = input.required<string>();
}