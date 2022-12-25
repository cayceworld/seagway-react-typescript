export interface ProductType {
  id: string;
  title: string;
  price: number;
  image: string;
  inStock: number;
}

export type AccessoriesProduct = ProductType & { description: string };
export type KickscooterProduct = ProductType & { isSelect: boolean };
