import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Reusable primary or secondary button component.
 */
@Component({
    selector: 'app-primary-button',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './primary-button.component.html',
    styleUrl: './primary-button.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimaryButtonComponent {
    readonly label = input.required<string>();
    readonly route = input<string>('/');
    readonly variant = input<'primary' | 'secondary'>('primary');
}