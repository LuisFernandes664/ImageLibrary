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
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SearchComponent } from './search/search.component';
import { TendenciesComponent } from './tendencies/tendencies.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'details', component: DetailsImageComponent, children: [
    {path: ':image_id', component: DetailsImageComponent}
  ]},
  {
    path: 'Favorite', component: FavoriteComponent
  },
  {
    path: 'search/:nameSearch', component: SearchComponent
  },
  {
    path: 'Fashion', component: TendenciesComponent
  },
  {
    path: 'Film', component: TendenciesComponent
  },
  {
    path: 'Wallpapers', component: TendenciesComponent
  },
  {
    path: '**', component: ErrorComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DetailsImageComponent,
    ErrorComponent,
    FavoriteComponent,
    SearchComponent,
    TendenciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    LibraryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
