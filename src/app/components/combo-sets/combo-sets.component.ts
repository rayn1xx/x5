import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ComboSet } from '../../models/product.model';

@Component({
  selector: 'app-combo-sets',
  templateUrl: './combo-sets.component.html',
  styleUrls: ['./combo-sets.component.css']
})
export class ComboSetsComponent {
  comboSets: ComboSet[];
  @Output() addToCartEvent = new EventEmitter<ComboSet>();

  constructor(private dataService: DataService) {
    this.comboSets = this.dataService.comboSets.filter(c => c.isPopular);
  }

  addToCart(comboSet: ComboSet): void {
    this.dataService.addToCart(comboSet, true);
    this.addToCartEvent.emit(comboSet);
  }

  getTotalProducts(comboSet: ComboSet): number {
    return comboSet.products.length;
  }

  getTotalSavings(comboSet: ComboSet): number {
    return comboSet.oldPrice - comboSet.price;
  }
}
