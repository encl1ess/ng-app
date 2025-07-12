import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

const API_BASE_URL = 'https://fakestoreapi.com/';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private http = inject(HttpClient);
  private apiBaseUrl = API_BASE_URL;

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this.apiBaseUrl}${url}`).pipe(
      catchError((error) => {
        console.error('Error fetching data:', error);
        return throwError(() => error);
      }),
    );
  }

  post<T, K>(url: string, body: K): Observable<T> {
    return this.http.post<T>(`${this.apiBaseUrl}${url}`, body);
  }
}
