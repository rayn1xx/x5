import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartCount$ = this.dataService.cartItems$;

  @Output() cartToggled = new EventEmitter<void>();

  constructor(private dataService: DataService) {}

  getCartCount(): number {
    return this.dataService.getCartCount();
  }

  toggleCart(): void {
    this.cartToggled.emit();
  }
}
