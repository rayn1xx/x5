import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CartItem } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() isOpen = false;
  @Output() closeCart = new EventEmitter<void>();

  cartItems: CartItem[] = [];
  total = 0;

  constructor(private dataService: DataService) {
    this.dataService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.total = this.dataService.getCartTotal();
    });
  }

  get cartCount(): number {
    return this.dataService.getCartCount();
  }

  updateQuantity(item: CartItem, delta: number): void {
    const newQuantity = item.quantity + delta;
    this.dataService.updateQuantity(
      item.product.id,
      newQuantity,
      item.isCombo
    );
  }

  removeItem(item: CartItem): void {
    this.dataService.removeFromCart(item.product.id, item.isCombo);
  }

  close(): void {
    this.closeCart.emit();
  }

  checkout(): void {
    // Emit event for checkout modal
    this.close();
  }

  getProductImage(item: CartItem): string {
    return (item.product as any).image || '📦';
  }

  getProductName(item: CartItem): string {
    return item.product.name;
  }

  getProductPrice(item: CartItem): number {
    return item.product.price;
  }
}
