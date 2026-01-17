import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.html'
})
export class Register {
  username = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
  this.http.post('http://localhost:5001/api/auth/register', {
    username: this.username,
    password: this.password
  }).subscribe({
    next: () => {
      alert('Registered successfully');
      this.router.navigate(['/']);
    },
    error: () => {
      alert('Register failed');
    }
  });
}
}