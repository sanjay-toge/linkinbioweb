import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
// // This code bootstraps the Angular application using the AppComponent and the provided application configuration.

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});