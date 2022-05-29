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
  image:string = '';
  responseAny: any;
  dateCreate: any;

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  constructor(private libraryservice: LibraryService) { }

  ngOnInit(): void {

      this.subscription = this.libraryservice.getImages().subscribe(
        {
          next: data => {
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
  }
}
