import { Component, Input, OnInit} from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  array = [1, 2, 3, 4];
  items: Item[] = [];
  constructor(private itemService: ItemService) {}
 ngOnInit(): void {
  const mid = localStorage.getItem('market_id');
  if (mid != null) {
    const marketId = +mid;
    // tslint:disable-next-line: deprecation
    this.itemService.getItems(marketId).subscribe({
      next: resp => {
        if (resp.code === 200) {
          this.items = resp.data;
        }
      }
    });
  }
 }
}
