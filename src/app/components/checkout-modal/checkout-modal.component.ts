import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-checkout-modal',
  templateUrl: './checkout-modal.component.html',
  styleUrls: ['./checkout-modal.component.css']
})
export class CheckoutModalComponent {
  @Input() isOpen = false;
  @Output() closeCheckout = new EventEmitter<void>();

  step: number = 1;
  orderPlaced = false;

  constructor(private dataService: DataService) {}

  close(): void {
    this.closeCheckout.emit();
    this.step = 1;
    this.orderPlaced = false;
  }

  nextStep(): void {
    if (this.step < 3) {
      this.step++;
    }
  }

  prevStep(): void {
    if (this.step > 1) {
      this.step--;
    }
  }

  placeOrder(): void {
    this.orderPlaced = true;
    this.dataService.clearCart();
  }

  randomOrderNumber(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }
}
