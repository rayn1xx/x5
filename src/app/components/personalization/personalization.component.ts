import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ComboSet } from '../../models/product.model';

@Component({
  selector: 'app-personalization',
  templateUrl: './personalization.component.html',
  styleUrls: ['./personalization.component.css']
})
export class PersonalizationComponent {
  recommendations: ComboSet[];
  selectedTime: string = 'evening';

  constructor(private dataService: DataService) {
    this.recommendations = this.dataService.getRecommendations();
  }

  setTimePreference(time: string): void {
    this.selectedTime = time;
    this.dataService.updatePreferences({ mealTimePreference: time });
    this.recommendations = this.dataService.getRecommendations();
  }

  getTimeIcon(time: string): string {
    const icons: Record<string, string> = {
      'morning': '🌅',
      'afternoon': '☀️',
      'evening': '🌙'
    };
    return icons[time] || time;
  }

  getTimeLabel(time: string): string {
    const labels: Record<string, string> = {
      'morning': 'Утро',
      'afternoon': 'День',
      'evening': 'Вечер'
    };
    return labels[time] || time;
  }
}
