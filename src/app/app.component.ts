import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'X5 Ready';
  isCartOpen = false;
  isCheckoutOpen = false;

  toggleCart(): void {
    this.isCartOpen = !this.isCartOpen;
  }

  closeCart(): void {
    this.isCartOpen = false;
  }

  openCheckout(): void {
    this.isCartOpen = false;
    this.isCheckoutOpen = true;
  }

  closeCheckout(): void {
    this.isCheckoutOpen = false;
  }
}
