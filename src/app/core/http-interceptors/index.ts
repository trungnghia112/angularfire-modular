/* "Barrel" of Http Interceptors; see HttpClient docs and sample code for more info */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from '@core/error-handler/app-error-handler.service';
import { HttpTokenInterceptor } from '@core/http-interceptors/http.token.interceptor';
import { environment } from '@env/environment';

import { HttpErrorInterceptor } from './http-error.interceptor';

/** Http interceptor providers in outside-in order */

const httpInterceptorProvidersArr: any = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
  { provide: ErrorHandler, useClass: AppErrorHandler }
];
if (!environment.production) {
  httpInterceptorProvidersArr.push({ provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true });
}

export const httpInterceptorProviders = [...httpInterceptorProvidersArr];
