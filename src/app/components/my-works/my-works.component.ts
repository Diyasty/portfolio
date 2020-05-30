import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-my-works',
  templateUrl: './my-works.component.html',
  styleUrls: ['./my-works.component.scss'],
})
export class MyWorksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
