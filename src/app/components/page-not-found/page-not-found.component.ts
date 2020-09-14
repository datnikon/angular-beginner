import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  srcImage = "https://orise.orau.gov/img/404.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
