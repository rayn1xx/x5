import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product, ComboSet, VideoReel, Subscription, CartItem, UserPreferences } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  private userPreferences = new BehaviorSubject<UserPreferences>({
    favoriteCategories: ['lunch', 'dinner'],
    dietaryRestrictions: [],
    mealTimePreference: 'evening',
    budgetRange: 'medium'
  });

  cartItems$ = this.cartItems.asObservable();
  userPreferences$ = this.userPreferences.asObservable();

  products: Product[] = [
    {
      id: 1,
      name: 'Паста Карбонара',
      description: 'Классическая итальянская паста с беконом и сливочным соусом',
      price: 299,
      oldPrice: 399,
      image: '🍝',
      category: 'lunch',
      calories: 520,
      weight: 350,
      isFavorite: false,
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: 'Салат Цезарь с курицей',
      description: 'Свежий салат с куриной грудкой, пармезаном и сухариками',
      price: 249,
      oldPrice: 329,
      image: '🥗',
      category: 'lunch',
      calories: 280,
      weight: 250,
      isFavorite: true,
      rating: 4.7,
      reviews: 98
    },
    {
      id: 3,
      name: 'Лосось на гриле',
      description: 'Филе лосося с овощами на гриле и лимонным соусом',
      price: 549,
      oldPrice: 699,
      image: '🐟',
      category: 'dinner',
      calories: 380,
      weight: 300,
      isFavorite: false,
      rating: 4.9,
      reviews: 76
    },
    {
      id: 4,
      name: 'Боул с киноа',
      description: 'Полезный боул с киноа, авокадо и свежими овощами',
      price: 329,
      image: '🥑',
      category: 'lunch',
      calories: 340,
      weight: 280,
      isFavorite: false,
      rating: 4.6,
      reviews: 54
    },
    {
      id: 5,
      name: 'Курица терияки',
      description: 'Куриное филе в соусе терияки с рисом и овощами',
      price: 349,
      oldPrice: 449,
      image: '🍗',
      category: 'dinner',
      calories: 450,
      weight: 380,
      isFavorite: false,
      rating: 4.8,
      reviews: 112
    },
    {
      id: 6,
      name: 'Смузи-боул',
      description: 'Асаи боул с гранолой, ягодами и фруктами',
      price: 279,
      image: '🍓',
      category: 'breakfast',
      calories: 290,
      weight: 250,
      isFavorite: true,
      rating: 4.9,
      reviews: 89
    }
  ];

  comboSets: ComboSet[] = [
    {
      id: 101,
      name: 'Обед в офис',
      description: 'Идеальный набор для быстрого и вкусного обеда на работе',
      price: 499,
      oldPrice: 698,
      image: '🍱',
      scenario: 'office-lunch',
      discount: 28,
      isPopular: true,
      products: [this.products[0], this.products[1]]
    },
    {
      id: 102,
      name: 'Ужин без готовки',
      description: 'Готовый ужин для всей семьи — просто разогрейте',
      price: 899,
      oldPrice: 1248,
      image: '🍽️',
      scenario: 'home-dinner',
      discount: 28,
      isPopular: true,
      products: [this.products[2], this.products[4]]
    },
    {
      id: 103,
      name: 'Полезный день',
      description: 'Сбалансированный рацион на весь день из полезных блюд',
      price: 799,
      oldPrice: 1057,
      image: '🥗',
      scenario: 'healthy-day',
      discount: 24,
      products: [this.products[3], this.products[5], this.products[1]]
    },
    {
      id: 104,
      name: 'Ужин на двоих',
      description: 'Романтический ужин для вас и вашего партнера',
      price: 1199,
      oldPrice: 1598,
      image: '👫',
      scenario: 'romantic-dinner',
      discount: 25,
      isPopular: true,
      products: [this.products[2], this.products[4], this.products[5]]
    },
    {
      id: 105,
      name: 'Перекус в дорогу',
      description: 'Удобные снеки и легкие блюда для путешествий',
      price: 399,
      oldPrice: 528,
      image: '🚗',
      scenario: 'travel-snack',
      discount: 24,
      products: [this.products[1], this.products[5]]
    }
  ];

  videoReels: VideoReel[] = [
    {
      id: 1,
      title: 'Обед за 299 ₽',
      description: 'Как быстро и вкусно пообедать в офисе? Покажем!',
      thumbnail: '🍝',
      duration: '0:45',
      views: '12.5K',
      scenario: 'office-lunch',
      comboSetId: 101,
      author: 'Food.ru'
    },
    {
      id: 2,
      title: 'Ужин без готовки',
      description: 'Приходишь домой — а ужин уже готов. Мечта!',
      thumbnail: '🍽️',
      duration: '0:58',
      views: '8.3K',
      scenario: 'home-dinner',
      comboSetId: 102,
      author: 'Food.ru'
    },
    {
      id: 3,
      title: 'Полезный перекус',
      description: '5 минут и у тебя идеальный полезный обед',
      thumbnail: '🥑',
      duration: '0:32',
      views: '15.2K',
      scenario: 'healthy-day',
      comboSetId: 103,
      author: 'Food.ru'
    },
    {
      id: 4,
      title: 'Ужин на двоих',
      description: 'Романтический вечер без хлопот на кухне',
      thumbnail: '👫',
      duration: '1:05',
      views: '22.1K',
      scenario: 'romantic-dinner',
      comboSetId: 104,
      author: 'Food.ru'
    },
    {
      id: 5,
      title: 'Перекус в дорогу',
      description: 'Что взять с собой в поездку? Показываем!',
      thumbnail: '🚗',
      duration: '0:41',
      views: '6.7K',
      scenario: 'travel-snack',
      comboSetId: 105,
      author: 'Food.ru'
    }
  ];

  subscriptions: Subscription[] = [
    {
      id: 201,
      name: 'Обеды по будням',
      description: '5 обедов в неделю с доставкой в офис',
      price: 2499,
      period: 'неделя',
      discount: 20,
      features: [
        '5 обедов в неделю',
        'Бесплатная доставка',
        'Меню на выбор',
        'Отмена в любой момент'
      ],
      isPopular: true,
      image: '📦'
    },
    {
      id: 202,
      name: 'Ужины на неделю',
      description: 'Готовые ужины на всю рабочую неделю',
      price: 3999,
      period: 'неделя',
      discount: 25,
      features: [
        '5 ужинов в неделю',
        'Бесплатная доставка',
        'Семейные порции',
        'Приоритетная поддержка'
      ],
      image: '🍽️'
    },
    {
      id: 203,
      name: 'Полный рацион',
      description: 'Завтраки, обеды и ужины на 7 дней',
      price: 6999,
      period: 'неделя',
      discount: 30,
      features: [
        '21 прием пищи',
        'Бесплатная доставка',
        'Персональный нутрициолог',
        'VIP-статус'
      ],
      isPopular: true,
      image: '🌟'
    }
  ];

  getCartItems(): CartItem[] {
    return this.cartItems.getValue();
  }

  addToCart(product: Product | ComboSet, isCombo: boolean = false): void {
    const currentItems = this.cartItems.getValue();
    const existingIndex = currentItems.findIndex(
      item => item.product.id === product.id && item.isCombo === isCombo
    );

    if (existingIndex >= 0) {
      currentItems[existingIndex].quantity += 1;
    } else {
      currentItems.push({ product, quantity: 1, isCombo });
    }

    this.cartItems.next(currentItems);
  }

  removeFromCart(productId: number, isCombo: boolean = false): void {
    const currentItems = this.cartItems.getValue();
    const filteredItems = currentItems.filter(
      item => !(item.product.id === productId && item.isCombo === isCombo)
    );
    this.cartItems.next(filteredItems);
  }

  updateQuantity(productId: number, quantity: number, isCombo: boolean = false): void {
    const currentItems = this.cartItems.getValue();
    const itemIndex = currentItems.findIndex(
      item => item.product.id === productId && item.isCombo === isCombo
    );

    if (itemIndex >= 0) {
      if (quantity <= 0) {
        currentItems.splice(itemIndex, 1);
      } else {
        currentItems[itemIndex].quantity = quantity;
      }
      this.cartItems.next(currentItems);
    }
  }

  clearCart(): void {
    this.cartItems.next([]);
  }

  getCartTotal(): number {
    return this.cartItems.getValue().reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
  }

  getCartCount(): number {
    return this.cartItems.getValue().reduce((count, item) => count + item.quantity, 0);
  }

  updatePreferences(prefs: Partial<UserPreferences>): void {
    const current = this.userPreferences.getValue();
    this.userPreferences.next({ ...current, ...prefs });
  }

  getRecommendations(): ComboSet[] {
    const prefs = this.userPreferences.getValue();
    // Simple recommendation logic based on preferences
    return this.comboSets.filter(combo => {
      if (prefs.mealTimePreference === 'morning') {
        return combo.scenario.includes('breakfast') || combo.scenario.includes('healthy');
      }
      if (prefs.mealTimePreference === 'evening') {
        return combo.scenario.includes('dinner');
      }
      return combo.isPopular;
    });
  }
}
