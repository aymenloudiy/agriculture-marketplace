interface itemsList {
  [key: string]: itemObject;
}
interface itemObject {
  id: string;
  product_name: string;
  product_price: string;
  product_currency: string;
  product_image: string;
}
const items: itemsList = {
  item1: {
    id: crypto.randomUUID(),
    product_name: "Miel_1",
    product_price: "10",
    product_currency: "MAD",
    product_image: "./assets/",
  },
  item2: {
    id: crypto.randomUUID(),
    product_name: "Miel_2",
    product_price: "10",
    product_currency: "MAD",
    product_image: "./assets/",
  },
  item3: {
    id: crypto.randomUUID(),
    product_name: "huile_1",
    product_price: "10",
    product_currency: "MAD",
    product_image: "./assets/",
  },
  item4: {
    id: crypto.randomUUID(),
    product_name: "huile_2",
    product_price: "10",
    product_currency: "MAD",
    product_image: "./assets/",
  },
};
export default items;
