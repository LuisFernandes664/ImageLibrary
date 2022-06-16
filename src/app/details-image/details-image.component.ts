import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LibraryService } from 'src/services/library.service';


@Component({
  selector: 'app-details-image',
  templateUrl: './details-image.component.html',
  styleUrls: ['./details-image.component.css']
})
export class DetailsImageComponent implements OnInit {

  subscription: Subscription;
  showImage: any;
  responseAny: any;
  allImages: any;
  atualImage:any;

  constructor(private libraryservice: LibraryService, private activeRoute: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    let id = this.activeRoute.snapshot.children[0].params["image_id"];
    this.showImage = id;
    console.log(id)


    this.allImages = this.libraryservice.getImagesById(this.showImage).subscribe(
      {
        next: data => {
          this.responseAny = data as any;
          console.log(data);
          //console.log(responseAny[0])
        },
        error: error => {
          this.router.navigate(['**'])
          console.log(error);
        },
        complete: () => {
          console.log('Complete')
        }
      }
    )
  }

  AddFavorite(id: string, regularImage: string, UserName:string, description: string, alt_description: string, created_at:any): void{

    let MoldeImageFav = {
      id: id,
      regularImage: regularImage,
      UserName: UserName,
      description: description,
      alt_description: alt_description,
      created_at: created_at
    }

    this.libraryservice.createFavorite(MoldeImageFav)
  }

  removeFav(id:string): void{
    this.libraryservice.removeMovie(id)
  }

}
