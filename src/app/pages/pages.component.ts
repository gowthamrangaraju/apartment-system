import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'apartment-system-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <apartment-system-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </apartment-system-one-column-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}
