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
  public show

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  constructor(private libraryservice: LibraryService) { }

  ngOnInit(): void {

      this.subscription = this.libraryservice.getImages().subscribe(
        {
          next: data => {
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
      console.log(this.show)
  }
}
