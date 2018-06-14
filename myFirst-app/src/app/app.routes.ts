import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { provideRoutes } from '@angular/router';
// import { provideRouterInitializer } from '@angular/router/src/router_module';


const APP_ROUTES = [
  {path: 'directory', component: DirectoryComponent },
  {path: '', component: HomeComponent }
];

export const APP_ROUTES_PROVIDER = [
  provideRoutes(APP_ROUTES)
];
