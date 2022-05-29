import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibraryService } from 'src/services/library.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsImageComponent } from './details-image/details-image.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'images', component: DetailsImageComponent, children: [
    {path: ':image_id', component: DetailsImageComponent}
  ]}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DetailsImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    LibraryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
