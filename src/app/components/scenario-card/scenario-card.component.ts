import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ComboSet } from '../../models/product.model';

@Component({
  selector: 'app-scenario-card',
  templateUrl: './scenario-card.component.html',
  styleUrls: ['./scenario-card.component.css']
})
export class ScenarioCardComponent {
  comboSets: ComboSet[];
  @Output() addToCartEvent = new EventEmitter<ComboSet>();

  constructor(private dataService: DataService) {
    this.comboSets = this.dataService.comboSets;
  }

  addToCart(comboSet: ComboSet): void {
    this.dataService.addToCart(comboSet, true);
    this.addToCartEvent.emit(comboSet);
  }

  getScenarioTitle(scenario: string): string {
    const titles: Record<string, string> = {
      'office-lunch': 'Обед в офис',
      'home-dinner': 'Ужин без готовки',
      'healthy-day': 'Полезный день',
      'romantic-dinner': 'Ужин на двоих',
      'travel-snack': 'Перекус в дорогу'
    };
    return titles[scenario] || scenario;
  }

  getScenarioDescription(scenario: string): string {
    const descriptions: Record<string, string> = {
      'office-lunch': 'Быстрый и вкусный обед прямо в офисе',
      'home-dinner': 'Приходишь домой — а ужин уже готов',
      'healthy-day': 'Сбалансированное питание на весь день',
      'romantic-dinner': 'Романтический вечер без хлопот',
      'travel-snack': 'Удобные снеки для путешествий'
    };
    return descriptions[scenario] || '';
  }

  getScenarioIcon(scenario: string): string {
    const icons: Record<string, string> = {
      'office-lunch': '🏢',
      'home-dinner': '🏠',
      'healthy-day': '🥗',
      'romantic-dinner': '💕',
      'travel-snack': '🚗'
    };
    return icons[scenario] || '🍽️';
  }
}
