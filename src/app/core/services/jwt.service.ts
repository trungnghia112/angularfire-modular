import { Injectable } from '@angular/core';
import { LocalStorageService } from '@core/services/local-storage.service';


@Injectable(
  // {providedIn: 'root'}
)
export class JwtService {
  constructor(private localStorageService: LocalStorageService) {
  }

  getToken(): String {
    return this.localStorageService.getItem('jwtToken');
  }

  saveToken(token: String) {
    this.localStorageService.setItem('jwtToken', token);
  }

  destroyToken() {
    this.localStorageService.removeItem('jwtToken');
  }

}
