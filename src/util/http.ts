export interface ProductType {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

export interface ProductsResponseType {
  products: ProductType[];
  limit: number;
  skip: number;
  total: number;
}

export const httpGet = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};
