import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  menu: any[] = [];
  public category: string = '';

  constructor() {}

  ngOnInit() {
    fetch('./assets/menu.json')
      .then((res) => res.json())
      .then((json) => {
        this.menu = json;
      });
  }
}
