import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { VideoReel, ComboSet } from '../../models/product.model';

@Component({
  selector: 'app-video-reels',
  templateUrl: './video-reels.component.html',
  styleUrls: ['./video-reels.component.css']
})
export class VideoReelsComponent {
  videoReels: VideoReel[];
  currentIndex = 0;
  isPlaying = false;
  @Output() addToCartEvent = new EventEmitter<ComboSet>();

  constructor(private dataService: DataService) {
    this.videoReels = this.dataService.videoReels;
  }

  get currentVideo(): VideoReel {
    return this.videoReels[this.currentIndex];
  }

  get currentComboSet(): ComboSet | undefined {
    return this.dataService.comboSets.find(
      combo => combo.id === this.currentVideo?.comboSetId
    );
  }

  nextVideo(): void {
    this.currentIndex = (this.currentIndex + 1) % this.videoReels.length;
    this.isPlaying = false;
  }

  prevVideo(): void {
    this.currentIndex = (this.currentIndex - 1 + this.videoReels.length) % this.videoReels.length;
    this.isPlaying = false;
  }

  goToVideo(index: number): void {
    this.currentIndex = index;
    this.isPlaying = false;
  }

  togglePlay(): void {
    this.isPlaying = !this.isPlaying;
  }

  addToCart(): void {
    const comboSet = this.currentComboSet;
    if (comboSet) {
      this.dataService.addToCart(comboSet, true);
      this.addToCartEvent.emit(comboSet);
    }
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
