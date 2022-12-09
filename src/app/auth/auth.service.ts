import { Injectable } from '@angular/core';
import { LoginForm } from '../types/loginForm';
import { RegisterForm } from '../types/registerForm';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  loading: boolean = false;
  isAuthenticated: boolean = false;

  login(form: LoginForm) {
    const auth = getAuth();
    if (this.loading) return;
    this.loading = true;
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
        this.router.navigate(['']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        this.isAuthenticated = false;
      })
      .finally(() => {
        this.loading = false;
      });
  }

  passwordMatched: boolean = true;
  register(form: RegisterForm) {
    if (form.password !== form.confirm_password) {
      this.passwordMatched = false;
      return;
    }
    const auth = getAuth();
    if (this.loading) return;
    this.loading = true;
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
        this.router.navigate(['']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this.isAuthenticated = false;
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
