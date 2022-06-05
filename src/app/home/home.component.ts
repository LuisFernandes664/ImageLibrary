import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LibraryService } from 'src/services/library.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private subscription: Subscription;
  private subscriptionSearch: Subscription;
  image:string = '';
  responseAny: any;
  dateCreate: any;
  nowSearch: any;

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscriptionSearch.unsubscribe();
  }

  constructor(private libraryservice: LibraryService) { }

  ngOnInit(): void {


    //////NORMAL OR RANDOM IMAGE
      this.subscription = this.libraryservice.getImages().subscribe(
        {
          next: data => {
            this.responseAny = data as any;
            console.log(data);
          },
          error: error => {
            console.log(error);
          },
          complete: () => {
            console.log('Complete')
          }
        }
      )


      this.nowSearch = this.libraryservice.searchNow
      
      if(this.nowSearch != undefined){
          this.subscription.unsubscribe();
          this.subscriptionSearch = this.libraryservice.retrieveBySearch(this.nowSearch).subscribe(
            {
              next: data => {
                console.log('AQUI')
                this.responseAny = data as any;
                console.log(data);
                //console.log(responseAny[0])
                this.image = data[0].urls.thumb;
    
                let datas = new Date(this.responseAny.created_at);//
                let newRelease = datas.toLocaleDateString('pt-PT', {timeZone: 'UTC'});
                
                this.dateCreate = newRelease
                console.log(newRelease)
              },
              error: error => {
                console.log(error);
              },
              complete: () => {
                console.log('Complete')
              }
            }
          )
        console.log('teste: ' + this.nowSearch)
      }
  }
  
  
}
