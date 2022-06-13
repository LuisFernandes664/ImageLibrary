import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { LibraryService } from 'src/services/library.service';

@Component({
  selector: 'app-details-image',
  templateUrl: './details-image.component.html',
  styleUrls: ['./details-image.component.css']
})
export class DetailsImageComponent implements OnInit {

  image: {id: string};
  subscription: Subscription;
  showImage: any;
  responseAny: any;
  allImages: any;
  nowID: any;

  /*ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }*/
  

  constructor(private libraryservice: LibraryService, private activeRoute: ActivatedRoute ) { }

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
          console.log(error);
        },
        complete: () => {
          console.log('Complete')
        }
      }
    )
  }

}
