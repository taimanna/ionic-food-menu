import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  foodId: number = 0;
  foodDetail = {
    id: 0,
    name: '',
    image: '',
    price: '',
    deliveryTime: '',
    rating: '',
    description: '',
    category: '',
  };
  constructor(private router: Router) {}

  ngOnInit() {
    this.foodId = +this.router.url.slice(8);

    fetch('./assets/menu.json')
      .then((res) => res.json())
      .then((data) => {
        this.foodDetail = Object.assign(
          {},
          ...data.filter((food: any) => food.id === this.foodId)
        );
      });
  }
}
