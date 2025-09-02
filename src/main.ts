import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { App } from './app/app';
import { appConfig } from './app/app.config';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    provideHttpClient(), // Zet dit VOOR de andere providers
    ...(appConfig.providers || [])
  ]
}).catch(err => console.error(err));