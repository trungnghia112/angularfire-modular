import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { environment } from '@env/environment';

@Injectable(
  // {providedIn: 'root'}
)
export class HttpCorsService {
  proxy: string = environment.proxy;

  constructor(private httpClient: HttpClient) {
  }

  get<T>(url: string, params: HttpParams = new HttpParams()): Observable<T> {
    // console.log('this.apiUrl + url', this.proxy + encodeURIComponent(url));
    return this.httpClient.get<any>(this.proxy + encodeURIComponent(url), {params})
      .pipe(
        retry(3), // Retry this request up to 3 times.
        // catchError(this.logService.handleError('get', [])) // Any errors after the 3rd retry will fall through to the app.
      );
  }

  post<T>(url: string, body: any = {}, params?: any): Observable<T> {
    if (typeof body === 'object') {
      body = JSON.stringify(body);
    }

    return this.httpClient.post<any>(this.proxy + encodeURIComponent(url), body, {params});
  }

  put<T>(url: string, body: any = {}, params?: any): Observable<T> {
    if (typeof body === 'object') {
      body = JSON.stringify(body);
    }

    return this.httpClient.put<any>(this.proxy + encodeURIComponent(url), body, {params});
  }

  delete<T>(url: string, params?: any): Observable<T> {
    return this.httpClient.delete<any>(this.proxy + encodeURIComponent(url), {params});
  }
}
