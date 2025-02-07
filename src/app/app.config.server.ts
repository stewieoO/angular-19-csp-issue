import { ApplicationConfig, CSP_NONCE, mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRouting(serverRoutes),
    {
      provide: CSP_NONCE,
      useValue: 'myRandomValue'
    }
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
