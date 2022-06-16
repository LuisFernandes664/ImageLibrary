import { Component, OnInit } from '@angular/core';
import { Favorite } from "src/app/details-image/favorite";
import { LibraryService } from 'src/services/library.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {


  ImageParse: Favorite[] = [];
  notFoundFavorite: any;
  ImageParseSize: number;

  constructor(private libraryservice: LibraryService) { }

  ngOnInit(): void {

    
    this.ImageParseSize = this.libraryservice.retriveAll().length;
    console.log(this.ImageParseSize)

    if(this.ImageParseSize == 0){
      this.notFoundFavorite = `
      <div id="main">
        <div class="notfound">
            <h1>Page Not Found 404</h1>
        </div>
      </div>
      `
    }else{
      this.ImageParse = this.libraryservice.retriveAll();
      console.log(this.ImageParse)
    }

  }

}
