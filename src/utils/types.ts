export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  images: string[];
  price: number;
  category: string;
  rating?: number;
  reviews?: number;
  stock?: number;
}

export interface Review {
  id: string;
  productId: string;
  user: string;
  rating: number;
  date: string;
  pros: string;
  cons: string;
  likes: number;
  dislikes: number;
}
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  color: string;
  image: string;
}
