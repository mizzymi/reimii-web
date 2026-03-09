import { Routes } from '@angular/router';
import { GamesPageComponent } from './features/games/pages/games-page.component';
import { AppsPageComponent } from './features/apps/pages/apps-page.component';
import { HomePageComponent } from './features/home/pages/home-page.component';
import { StudioPageComponent } from './features/studio/pages/studio-page.component';
import { GameDetailPageComponent } from './features/games/pages/details/game-detail-page.component';
import { AppDetailPageComponent } from './features/apps/pages/details/app-detail-page.component';

/**
 * Main application routes.
 */
export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./core/layout/main-layout/main-layout.component').then((m) => m.MainLayoutComponent),
        children: [
            {
                path: '',
                component: HomePageComponent
            },
            {
                path: 'apps',
                children: [
                    {
                        path: '',
                        component: AppsPageComponent,
                    },
                    {
                        path: ':slug',
                        component: AppDetailPageComponent,
                    },
                ],
            },
            {
                path: 'games',
                children: [
                    {
                        path: '',
                        component: GamesPageComponent,
                    },
                    {
                        path: ':slug',
                        component: GameDetailPageComponent,
                    },
                ],
            },
            {
                path: 'studio',
                component: StudioPageComponent
            },
        ],
    },
    {
        path: '**',
        redirectTo: '',
    },
];