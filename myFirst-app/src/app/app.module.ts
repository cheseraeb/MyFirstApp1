import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { appRoutes } from './app.routes';
import { FilterPipe } from './filter.pipe';
import { HttpClientModule } from '@angular/common/http';

// import { LoggingService } from './logging.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe
    // LoggingService
  ],
  providers: [],
  bootstrap: [AppComponent]
  // bootstrap: [HomeComponent],
})
export class AppModule { }
