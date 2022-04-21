import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bipros-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() {
    console.log('Faq');
  }

  ngOnInit(): void {
  }

}
