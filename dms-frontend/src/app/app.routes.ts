import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Upload } from './upload/upload';
import { Documents } from './documents/documents';
import { Register } from './register/register';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'upload', component: Upload },
  { path: 'documents', component: Documents }
];