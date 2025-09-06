import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import {LOCALE_ID} from '@angular/core';
import localeNlBe from '@angular/common/locales/nl-BE';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeNlBe);

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    provideHttpClient(), // Zet dit VOOR de andere providers
    ...(appConfig.providers || []),
    { provide: LOCALE_ID, useValue: 'nl-BE' } // Voeg deze regel toe om de locale in te stellen
  ]
}).catch(err => console.error(err));