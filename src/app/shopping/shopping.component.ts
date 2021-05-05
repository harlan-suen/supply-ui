import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ItemService } from '../service/item.service';
import { UserService } from '../service/user.service';
import { CartService } from './cart.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit{
  cartCount = 0;
  user: any;
  constructor(private cartService: CartService, private userService: UserService, private itemService: ItemService) {}

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.cartService.changeCount$.subscribe(res => this.cartCount = res);
    const id = localStorage.getItem('id');
    if (id != null) {
      const userId: number = +id;
      // tslint:disable-next-line: deprecation
      this.userService.getUserById(userId).subscribe({
        next: resp => {
          if (resp.code === 200) {
            this.user = resp.data;
          }
        }
      });
    }
  }
}
