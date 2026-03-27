import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subscription } from '../../models/product.model';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {
  subscriptions: Subscription[];
  @Output() subscribeEvent = new EventEmitter<Subscription>();

  constructor(private dataService: DataService) {
    this.subscriptions = this.dataService.subscriptions;
  }

  subscribe(subscription: Subscription): void {
    this.subscribeEvent.emit(subscription);
  }

  getPeriodLabel(period: string): string {
    const labels: Record<string, string> = {
      'неделя': 'в неделю',
      'месяц': 'в месяц'
    };
    return labels[period] || period;
  }

  calculateMonthlyPrice(price: number, period: string): number {
    if (period === 'неделя') {
      return price * 4;
    }
    return price;
  }
}
