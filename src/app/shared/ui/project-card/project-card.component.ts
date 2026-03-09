import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Reusable project card for games and apps.
 */
@Component({
    selector: 'app-project-card',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './project-card.component.html',
    styleUrl: './project-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
    readonly category = input.required<string>();
    readonly title = input.required<string>();
    readonly description = input.required<string>();
    readonly meta = input.required<string>();
    readonly route = input.required<string>();
}