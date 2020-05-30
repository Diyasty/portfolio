import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxTypedJsComponent } from 'ngx-typed-js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  @ViewChild(NgxTypedJsComponent) typed: NgxTypedJsComponent;

  constructor() {}

  ngOnInit(): void {}
}
