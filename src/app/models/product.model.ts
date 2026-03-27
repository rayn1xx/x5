export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  calories?: number;
  weight?: number;
  isFavorite?: boolean;
  rating?: number;
  reviews?: number;
}

export interface ComboSet {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice: number;
  image: string;
  products: Product[];
  scenario: string;
  discount: number;
  isPopular?: boolean;
}

export interface VideoReel {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: string;
  scenario: string;
  comboSetId: number;
  author: string;
  isLiked?: boolean;
}

export interface Subscription {
  id: number;
  name: string;
  description: string;
  price: number;
  period: string;
  discount: number;
  features: string[];
  isPopular?: boolean;
  image: string;
}

export interface CartItem {
  product: Product | ComboSet;
  quantity: number;
  isCombo: boolean;
}

export interface UserPreferences {
  favoriteCategories: string[];
  dietaryRestrictions: string[];
  mealTimePreference: string;
  budgetRange: string;
}
