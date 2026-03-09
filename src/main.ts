import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

/**
 * Application bootstrap entry point.
 */
bootstrapApplication(AppComponent, appConfig).catch((error: unknown) => {
    console.error('Application bootstrap failed:', error);
});