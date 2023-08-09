import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  menu: any;
  popular: any;

  constructor() {}

  ngOnInit() {
    fetch('./assets/menu.json')
      .then((res) => res.json())
      .then((json) => {
        this.menu = json;
        this.popular = json.splice(0, 4);
      });
  }

  onClick() {
    console.log(this.popular);
  }
}
