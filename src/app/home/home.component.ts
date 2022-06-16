import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  nowSearch: any;

  pageActual: number = 1;
  next: number;
  totalPage:number;


  constructor(private libraryservice: LibraryService, private router: Router) { }

  ngOnInit(): void {

    
      this.subscription = this.libraryservice.getImages(this.pageActual).subscribe(
        {
          next: data => {
            this.responseAny = data as any;
            console.log(data);
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


  NextPage(){
      this.pageActual++
      console.log('Proximo: '+ this.pageActual)
      this.subscription = this.libraryservice.getImages(this.pageActual).subscribe(
        {
          next: data => {
            this.responseAny = data as any;
            console.log(data);
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

  PrevPage(){
    if(this.pageActual > 1){
      this.pageActual--;
      console.log('Anterior: '+ this.pageActual)
      this.subscription = this.libraryservice.getImages(this.pageActual).subscribe(
        {
          next: data => {
            this.responseAny = data as any;
            console.log(data);
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
  }
  
}
