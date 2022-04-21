import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bipros-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { 
    console.log('PageNotFoundComponent');
  }

  ngOnInit(): void {
  }

}
