export const products = [
  {
    id: "fruit1",
    name: "Organic Grapefruits",
    description: "Juicy, pesticide-free grapefruits packed with vitamin C.",
    image: "/assets/grapefruit.png",
    images: ["/assets/grapefruit.png"],
    price: 5.99,
    stock: 40,
    category: "fresh-produce",
    rating: 4.2,
    reviews: 7,
    similarProductIds: ["fruit2", "fruit3", "fruit4", "fruit5", "fruit6"],
  },
  {
    id: "fruit2",
    name: "Asparagus Bunch",
    description: "Crisp, green asparagus freshly harvested.",
    image: "/assets/asparagus.png",
    images: ["/assets/asparagus.png"],
    price: 3.5,
    stock: 50,
    category: "fresh-produce",
    rating: 4.4,
    reviews: 12,
    similarProductIds: ["fruit1", "fruit3", "fruit4", "fruit5", "fruit6"],
  },
  {
    id: "fruit3",
    name: "Coconuts (2 pcs)",
    description: "Naturally grown coconuts with refreshing water.",
    image: "/assets/coconut.png",
    images: ["/assets/coconut.png"],
    price: 6.0,
    stock: 20,
    category: "fresh-produce",
    rating: 4.1,
    reviews: 5,
    similarProductIds: ["fruit1", "fruit2", "fruit4", "fruit5", "fruit6"],
  },
  {
    id: "fruit4",
    name: "Organic Carrots",
    description: "Crunchy, sweet carrots perfect for juicing and snacking.",
    image: "/assets/carrots.png",
    images: ["/assets/carrots.png"],
    price: 2.75,
    stock: 60,
    category: "fresh-produce",
    rating: 4.3,
    reviews: 6,
    similarProductIds: ["fruit1", "fruit2", "fruit3", "fruit5", "fruit6"],
  },

  {
    id: "fruit6",
    name: "Dates (Organic)",
    description: "Soft and sweet Medjool dates.",
    image: "/assets/dates.png",
    images: ["/assets/dates.png"],
    price: 8.5,
    stock: 25,
    category: "fresh-produce",
    rating: 4.8,
    reviews: 14,
    similarProductIds: ["fruit1", "fruit2", "fruit3", "fruit4", "fruit5"],
  },

  {
    id: "pot1",
    name: "Berber Clay Tagine",
    description: "Hand-painted clay tagine for traditional cooking.",
    image: "/assets/pottery1.png",
    images: ["/assets/pottery1.png", "/assets/pottery2.png"],
    price: 38.0,
    stock: 10,
    category: "pottery",
    rating: 4.9,
    reviews: 14,
    similarProductIds: ["pot2", "pot3", "pot4", "pot5", "pot6"],
  },
  {
    id: "pot2",
    name: "Decorative Clay Bowl",
    description: "Moroccan-style ceramic bowl for decor or serving.",
    image: "/assets/pottery3.png",
    images: ["/assets/pottery3.png"],
    price: 16.0,
    stock: 25,
    category: "pottery",
    rating: 4.3,
    reviews: 9,
    similarProductIds: ["pot1", "pot3", "pot4", "pot5", "pot6"],
  },
  {
    id: "pot3",
    name: "Mini Glazed Jar",
    description: "Compact jar glazed in traditional patterns.",
    image: "/assets/pottery4.png",
    images: ["/assets/pottery4.png"],
    price: 12.0,
    stock: 30,
    category: "pottery",
    rating: 4.4,
    reviews: 5,
    similarProductIds: ["pot1", "pot2", "pot4", "pot5", "pot6"],
  },
  {
    id: "pot4",
    name: "Ceramic Vase",
    description: "Elegant vase with blue and white patterns.",
    image: "/assets/pottery5.png",
    images: ["/assets/pottery5.png"],
    price: 28.5,
    stock: 12,
    category: "pottery",
    rating: 4.5,
    reviews: 6,
    similarProductIds: ["pot1", "pot2", "pot3", "pot5", "pot6"],
  },
  {
    id: "pot5",
    name: "Traditional Soup Bowl",
    description: "Deep bowl designed for stews and traditional dishes.",
    image: "/assets/pottery6.png",
    images: ["/assets/pottery6.png"],
    price: 19.99,
    stock: 20,
    category: "pottery",
    rating: 4.6,
    reviews: 7,
    similarProductIds: ["pot1", "pot2", "pot3", "pot4", "pot6"],
  },
  {
    id: "pot6",
    name: "Painted Pitcher",
    description: "Hand-painted water pitcher with colorful detailing.",
    image: "/assets/pottery7.png",
    images: ["/assets/pottery7.png"],
    price: 23.5,
    stock: 18,
    category: "pottery",
    rating: 4.7,
    reviews: 11,
    similarProductIds: ["pot1", "pot2", "pot3", "pot4", "pot5"],
  },

  // Artisanal Goods (6 items)
  {
    id: "art1",
    name: "Handwoven Wool Rug",
    description: "Traditional wool rug made by local artisans.",
    image: "/assets/artisan1.png",
    images: ["/assets/artisan1.png", "/assets/artisan2.png"],
    price: 95.0,
    stock: 5,
    category: "artisanal-goods",
    rating: 4.8,
    reviews: 13,
    similarProductIds: ["art2", "art3", "art4", "art5", "art6"],
  },
  {
    id: "art2",
    name: "Wool Wall Hanging",
    description: "Minimalist wool tapestry in earthy tones.",
    image: "/assets/artisan3.png",
    images: ["/assets/artisan3.png"],
    price: 44.0,
    stock: 8,
    category: "artisanal-goods",
    rating: 4.5,
    reviews: 6,
    similarProductIds: ["art1", "art3", "art4", "art5", "art6"],
  },
  {
    id: "art3",
    name: "Handmade Leather Wallet",
    description: "Stitched by hand using vegetable-tanned leather.",
    image: "/assets/artisan4.png",
    images: ["/assets/artisan4.png"],
    price: 35.0,
    stock: 15,
    category: "artisanal-goods",
    rating: 4.6,
    reviews: 9,
    similarProductIds: ["art1", "art2", "art4", "art5", "art6"],
  },
  {
    id: "art4",
    name: "Carved Wooden Spoon Set",
    description: "Utensils carved from olive wood with a natural finish.",
    image: "/assets/artisan5.png",
    images: ["/assets/artisan5.png"],
    price: 18.0,
    stock: 20,
    category: "artisanal-goods",
    rating: 4.4,
    reviews: 8,
    similarProductIds: ["art1", "art2", "art3", "art5", "art6"],
  },
  {
    id: "art5",
    name: "Traditional Woven Basket",
    description: "Palm leaf basket ideal for storage and decor.",
    image: "/assets/artisan6.png",
    images: ["/assets/artisan6.png"],
    price: 27.0,
    stock: 25,
    category: "artisanal-goods",
    rating: 4.5,
    reviews: 10,
    similarProductIds: ["art1", "art2", "art3", "art4", "art6"],
  },
  {
    id: "art6",
    name: "Copper Teapot",
    description: "Hammered copper teapot for Moroccan mint tea.",
    image: "/assets/artisan7.png",
    images: ["/assets/artisan7.png"],
    price: 49.99,
    stock: 10,
    category: "artisanal-goods",
    rating: 4.9,
    reviews: 15,
    similarProductIds: ["art1", "art2", "art3", "art4", "art5"],
  },

  {
    id: "olive1",
    name: "Extra Virgin Olive Oil",
    description: "Cold-pressed extra virgin olive oil from local farms.",
    image: "/assets/olive1.png",
    images: ["/assets/olive1.png", "/assets/olive2.png"],
    price: 18.99,
    stock: 25,
    category: "olive-oil",
    rating: 4.7,
    reviews: 12,
    similarProductIds: ["olive2", "olive3", "olive4", "olive5", "olive6"],
  },
  {
    id: "olive2",
    name: "Organic Olive Oil",
    description: "USDA-certified organic olive oil.",
    image: "/assets/olive2.png",
    images: ["/assets/olive2.png"],
    price: 21.5,
    stock: 30,
    category: "olive-oil",
    rating: 4.6,
    reviews: 10,
    similarProductIds: ["olive1", "olive3", "olive4", "olive5", "olive6"],
  },
  {
    id: "olive3",
    name: "Garlic Infused Olive Oil",
    description: "Premium olive oil infused with garlic.",
    image: "/assets/olive3.png",
    images: ["/assets/olive3.png"],
    price: 20.0,
    stock: 20,
    category: "olive-oil",
    rating: 4.8,
    reviews: 8,
    similarProductIds: ["olive1", "olive2", "olive4", "olive5", "olive6"],
  },
  {
    id: "olive4",
    name: "Chili Infused Olive Oil",
    description: "Spicy olive oil perfect for pizza and pasta.",
    image: "/assets/olive4.png",
    images: ["/assets/olive4.png"],
    price: 19.0,
    stock: 18,
    category: "olive-oil",
    rating: 4.5,
    reviews: 11,
    similarProductIds: ["olive1", "olive2", "olive3", "olive5", "olive6"],
  },

  // Medical Honey
  {
    id: "honey1",
    name: "Mountain Medical Honey",
    description: "Raw and unfiltered therapeutic-grade honey.",
    image: "/assets/honey1.png",
    images: ["/assets/honey1.png"],
    price: 24.5,
    stock: 15,
    category: "medical-honey",
    rating: 4.9,
    reviews: 14,
    similarProductIds: ["honey2", "honey3", "honey4", "honey5", "honey6"],
  },
  {
    id: "honey2",
    name: "Eucalyptus Honey",
    description: "Medicinal honey made from eucalyptus blossoms.",
    image: "/assets/honey2.png",
    images: ["/assets/honey2.png"],
    price: 23.0,
    stock: 20,
    category: "medical-honey",
    rating: 4.6,
    reviews: 9,
    similarProductIds: ["honey1", "honey3", "honey4", "honey5", "honey6"],
  },
  {
    id: "honey3",
    name: "Thyme Honey",
    description: "Strong flavored honey rich in antioxidants.",
    image: "/assets/honey3.png",
    images: ["/assets/honey3.png"],
    price: 22.5,
    stock: 18,
    category: "medical-honey",
    rating: 4.7,
    reviews: 10,
    similarProductIds: ["honey1", "honey2", "honey4", "honey5", "honey6"],
  },
  {
    id: "honey4",
    name: "Orange Blossom Honey",
    description: "Mild and sweet honey from orange trees.",
    image: "/assets/honey4.png",
    images: ["/assets/honey4.png"],
    price: 21.0,
    stock: 25,
    category: "medical-honey",
    rating: 4.4,
    reviews: 7,
    similarProductIds: ["honey1", "honey2", "honey3", "honey5", "honey6"],
  },
];
