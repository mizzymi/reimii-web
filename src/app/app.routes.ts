import { Routes } from '@angular/router';
import { SiteShell } from './shared/layout/site-shell/site-shell';
import { Home } from './pages/home/home';
import { Games } from './pages/games/games';
import { Apps } from './pages/apps/apps';
import { Studio } from './pages/studio/studio';
import { Contact } from './pages/contact/contact';
import { AppDetail } from './pages/apps/app-detail/app-detail';

export const routes: Routes = [
    {
        path: '',
        component: SiteShell,
        children: [
            { path: '', pathMatch: 'full', component: Home },
            { path: 'games', component: Games },
            { path: 'apps', component: Apps },
            { path: 'apps/:id', component: AppDetail },
            { path: 'studio', component: Studio },
            { path: 'contact', component: Contact },
        ],
    },
    { path: '**', redirectTo: '' },
];