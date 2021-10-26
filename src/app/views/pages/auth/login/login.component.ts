import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }

  async login() {
    return await this.authService.googleLogin();
  }

}
