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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  

  constructor(private libraryservice: LibraryService, private activeRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    let id = this.activeRoute.snapshot.children[0].params["id"];
    this.showImage = id;
    console.log(id)


    this.allImages = this.libraryservice.getImages().subscribe(
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

    for (let i = 0; i < this.allImages.length; i++) {
      if(String(this.allImages[i].nameMovie) == this.showImage){
        this.nowID = this.allImages[i]
        let ind = i
        console.log(ind)
      }
    }

    this.activeRoute.params.subscribe((params : Params) => {
      this.image = {
        id: params['id']
      }
    });
  }

}
