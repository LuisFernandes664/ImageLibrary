import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LibraryService } from 'src/services/library.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  public newSearch: string = "";



  @Output()
  newTextSearch: EventEmitter<string> = new EventEmitter<string>();

  onSearchChange(){
    this.newTextSearch.emit(this.newSearch)
  }

  constructor(private libraryservice: LibraryService) { }

  ngOnInit(): void {

  }

  buttonSearch(): void{
    //this.newTextSearch = this.newSearch
    this.libraryservice.retrieveBySearch(this.newSearch)
    console.log(this.newSearch)
    this.newSearch = "";
  }

}
