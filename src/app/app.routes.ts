import { Routes } from '@angular/router';

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
                loadComponent: () =>
                    import('./features/home/pages/home-page.component').then((m) => m.HomePageComponent),
            },
            {
                path: 'games',
                loadComponent: () =>
                    import('./features/games/pages/games-page.component').then((m) => m.GamesPageComponent),
            },
            {
                path: 'apps',
                loadComponent: () =>
                    import('./features/apps/pages/apps-page.component').then((m) => m.AppsPageComponent),
            },
            {
                path: 'studio',
                loadComponent: () =>
                    import('./features/studio/pages/studio-page.component').then((m) => m.StudioPageComponent),
            },
        ],
    },
    {
        path: '**',
        redirectTo: '',
    },
];