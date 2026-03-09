import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectCardComponent } from '../../../../shared/ui/project-card/project-card.component';
import { SectionTitleComponent } from '../../../../shared/ui/section-title/section-title.component';
import { FEATURED_GAMES } from '../../data/home.data';

/**
 * Featured games section.
 */
@Component({
    selector: 'app-games-section',
    standalone: true,
    imports: [SectionTitleComponent, ProjectCardComponent],
    templateUrl: './games-section.component.html',
    styleUrl: './games-section.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesSectionComponent {
    protected readonly games = FEATURED_GAMES;
}