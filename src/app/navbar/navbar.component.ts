import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  public newSearch: string = "";


  constructor() { }

  ngOnInit(): void {

  }


  buttonSearch(): void{
      this.newSearch = "";
  }

}
