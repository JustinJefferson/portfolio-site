import { Component, OnInit } from '@angular/core';
import { PORTFOLIOS } from '../portfolio-mock';

@Component({
  selector: 'app-portfolio-directory',
  templateUrl: './portfolio-directory.component.html',
  styleUrls: ['./portfolio-directory.component.css']
})
export class PortfolioDirectoryComponent implements OnInit {

  portfolios = PORTFOLIOS;

  constructor() { }

  ngOnInit() {
  }

}
