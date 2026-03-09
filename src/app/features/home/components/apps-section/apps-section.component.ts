import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectCardComponent } from '../../../../shared/ui/project-card/project-card.component';
import { SectionTitleComponent } from '../../../../shared/ui/section-title/section-title.component';
import { apps } from '../../../../core/data/data';

/**
 * Featured apps section.
 */
@Component({
    selector: 'app-apps-section',
    standalone: true,
    imports: [SectionTitleComponent, ProjectCardComponent],
    templateUrl: './apps-section.component.html',
    styleUrl: './apps-section.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppsSectionComponent {
    protected readonly apps = apps;
}