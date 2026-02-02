import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'apps', renderMode: RenderMode.Prerender },
  { path: 'games', renderMode: RenderMode.Prerender },
  { path: 'studio', renderMode: RenderMode.Prerender },
  { path: 'contact', renderMode: RenderMode.Prerender },

  { path: 'apps/:id', renderMode: RenderMode.Server },
  { path: 'games/:id', renderMode: RenderMode.Server },

  { path: '**', renderMode: RenderMode.Prerender },
];
