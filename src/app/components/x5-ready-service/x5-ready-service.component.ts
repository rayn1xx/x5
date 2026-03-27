import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ComboSet } from '../../models/product.model';

@Component({
  selector: 'app-x5-ready-service',
  templateUrl: './x5-ready-service.component.html',
  styleUrls: ['./x5-ready-service.component.css']
})
export class X5ReadyServiceComponent {
  recommendedCombos: ComboSet[];

  constructor(private dataService: DataService) {
    this.recommendedCombos = this.dataService.getRecommendations();
  }

  get features() {
    return [
      {
        icon: '⚡',
        title: 'Мгновенный заказ',
        description: 'Добавляйте готовые наборы в корзину в один клик'
      },
      {
        icon: '🎯',
        title: 'Персонализация',
        description: 'Рекомендации на основе ваших предпочтений'
      },
      {
        icon: '🔄',
        title: 'Повтор заказа',
        description: 'Быстрый повтор прошлых заказов'
      },
      {
        icon: '📅',
        title: 'Подписка',
        description: 'Регулярная доставка по расписанию'
      }
    ];
  }
}
