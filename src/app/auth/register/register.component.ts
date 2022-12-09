import { Component } from '@angular/core';
import { RegisterForm } from 'src/app/types/registerForm';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private authService: AuthService) {}
  form: RegisterForm = {
    email: '',
    password: '',
    confirm_password: '',
  };

  submit() {
    this.authService.register(this.form);
  }

  loading() {
    return this.authService.loading;
  }
}
