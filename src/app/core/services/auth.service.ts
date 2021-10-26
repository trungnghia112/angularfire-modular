import { Injectable, Optional } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '@core/interfaces/user';
import { Auth, authState, GoogleAuthProvider, signInAnonymously, signInWithPopup, signOut } from '@angular/fire/auth';
import { switchMap, tap } from 'rxjs/operators';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { hasCustomClaim } from '@angular/fire/auth-guard';
import { Router } from '@angular/router';
import { Constants } from '@core/configs/constants';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  currentUser!: Observable<User | any>;
  userSubject: BehaviorSubject<User> = new BehaviorSubject<User>({});

  constructor(@Optional() private auth: Auth,
              private firestore: Firestore,
              private router: Router) {
    if (auth) {
      this.currentUser = authState(this.auth).pipe(
        switchMap(async (user) => {
          console.log('AuthService-authState-user:', user);
          if (user) {
            const docRef = doc(firestore, 'users', user.uid);
            const docSnap = await getDoc(docRef);
            return docSnap.data();
          } else {
            return of(null);
          }
        }),
        tap(user => {
          console.log(user);
        })
      );
    }
  }

  googleLogin() {
    const provider = new GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  loginAnonymously() {
    return signInAnonymously(this.auth);
  }

  logout() {
    return signOut(this.auth).then(() => {
      this.router.navigate([Constants.loginUrl]);
    });
  }

  private async oAuthLogin(provider: any) {
    return await signInWithPopup(this.auth, provider).then(
      (credential) => {
        hasCustomClaim('admin');
        console.log('AuthService-oAuthLogin-credential', credential);
      }
    );
  }
}
