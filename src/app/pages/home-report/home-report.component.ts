import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'page-home-report',
  templateUrl: './home-report.component.html',
  styleUrls: ['./home-report.component.sass']
})
export class HomeReportComponent implements OnInit {

  constructor() { }

  @Input() dataHome = '';

  ngOnInit() {
  }

}
