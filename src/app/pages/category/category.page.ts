import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  constructor(private router: Router) {}

  category: string = '';
  menu: any;

  ngOnInit() {
    this.category =
      this.router.url.charAt(1).toUpperCase() + this.router.url.slice(2);

    fetch('./assets/menu.json')
      .then((res) => res.json())
      .then((data) => {
        switch (this.category) {
          case 'All':
            this.menu = data;
            break;
          case 'Fastfood':
          case 'Seafood':
            this.menu = data.filter(
              (item: any) => item.category === this.category.toLocaleLowerCase()
            );

            break;
          default:
            break;
        }
      });
  }
}
