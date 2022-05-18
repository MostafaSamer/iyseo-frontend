import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-header-footer-layout',
  templateUrl: './header-footer-layout.component.html',
  styleUrls: ['./header-footer-layout.component.scss']
})
export class HeaderFooterLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    feather.replace();
  }

}
