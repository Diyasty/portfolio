import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxTypedJsComponent } from 'ngx-typed-js';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild(NgxTypedJsComponent) typed: NgxTypedJsComponent;

  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
