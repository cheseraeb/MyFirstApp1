import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { APP_ROUTES_PROVIDER } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent
  ],
  providers: [],
  bootstrap: [AppComponent, [APP_ROUTES_PROVIDER]]
  // bootstrap: [HomeComponent],

})
export class AppModule { }
