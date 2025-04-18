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

export const products: Product[] = [
  {
    id: "1",
    name: "Extra Virgin Olive Oil",
    description: "Cold-pressed, locally produced olive oil.",
    image: "/assets/olive1.jpg",
    images: ["/assets/olive1.jpg", "/assets/olive2.jpg"],
    price: 18.99,
    category: "olive-oil",
    rating: 4.7,
    reviews: 12,
    stock: 25,
  },
  {
    id: "2",
    name: "Mountain Medical Honey",
    description: "Raw and unfiltered therapeutic-grade honey.",
    image: "/assets/honey1.jpg",
    images: ["/assets/honey1.jpg", "/assets/honey2.jpg"],
    price: 24.5,
    category: "medical-honey",
    rating: 4.8,
    reviews: 20,
    stock: 30,
  },
  {
    id: "3",
    name: "Organic Apples",
    description: "Crisp, naturally grown apples.",
    image: "/assets/apple.jpg",
    images: ["/assets/apple.jpg", "/assets/apple2.jpg"],
    price: 5.99,
    category: "fresh-produce",
    rating: 4.5,
    reviews: 8,
    stock: 60,
  },
  {
    id: "4",
    name: "Berber Clay Pot",
    description: "Handcrafted Moroccan clay pot.",
    image: "/assets/pottery1.jpg",
    images: ["/assets/pottery1.jpg", "/assets/pottery2.jpg"],
    price: 32.0,
    category: "pottery",
    rating: 4.6,
    reviews: 14,
    stock: 12,
  },
  {
    id: "5",
    name: "Wool Wall Hanging",
    description: "Traditional handwoven textile.",
    image: "/assets/artisan1.jpg",
    images: ["/assets/artisan1.jpg", "/assets/artisan2.jpg"],
    price: 44.0,
    category: "artisanal-goods",
    rating: 4.9,
    reviews: 18,
    stock: 10,
  },
];
