import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LibraryService } from 'src/services/library.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  subscriptionSearch: Subscription;
  responseAny: any;
  pageActual: number = 1;
  totalPage:number;
  aux:string;

  constructor(private libraryservice: LibraryService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    let name = this.activeRoute.snapshot.params['nameSearch'];

    

    if(name != undefined || name!= ''){
      name.subscribe
      this.subscriptionSearch = this.libraryservice.retrieveBySearch(name, this.pageActual).subscribe(
      {
        next: data => {
          this.responseAny = data as any;
          this.responseAny = this.responseAny.results;
          this.totalPage = data.total_pages;
          console.log(this.totalPage)
        },
        error: error => {
          this.router.navigate(['**'])
          console.log(error);
        },
        complete: () => {
          console.log('Complete')
        }
      })
      name = "";
    }else{
      this.router.navigate(['**'])
    }
    
  }

  NextPage(){
    if(this.pageActual < this.totalPage){
      this.pageActual++
      console.log('Proximo: '+ this.pageActual)
      let name = this.activeRoute.snapshot.params['nameSearch'];
      this.subscriptionSearch = this.libraryservice.retrieveBySearch(name, this.pageActual).subscribe(
        {
          next: data => {
            this.responseAny = data as any;
            this.responseAny = this.responseAny.results;
            this.totalPage = data.total_pages;
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

  PrevPage(){
    if(this.pageActual > 1){
      this.pageActual--
      console.log('Anterior: '+ this.pageActual)
      let name = this.activeRoute.snapshot.params['nameSearch'];
      this.subscriptionSearch = this.libraryservice.retrieveBySearch(name, this.pageActual).subscribe(
        {
          next: data => {
            this.responseAny = data as any;
            this.responseAny = this.responseAny.results;
            this.totalPage = data.total_pages;
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
