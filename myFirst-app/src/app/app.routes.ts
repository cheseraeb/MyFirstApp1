import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';

export const appRoutes: Routes = [
  { path: 'directory', component: DirectoryComponent },
  { path: '',      component: HomeComponent },
  ];

