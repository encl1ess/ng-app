export interface Product {
  id: number;
  title: string;
  image: string;
  rating: Rating;
  price: number;
}

export type Rating = {
  rate: number;
  count: number;
};

export type ProductList = Product[];

export type ProductCategories = string[];
