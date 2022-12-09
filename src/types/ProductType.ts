export type PartialProductType = { id: string } & Partial<ProductAttributes>;
export type ProductType = { id: string } & ProductAttributes;

export interface ProductAttributes {
  title: string;
  price: number;
  image: string;
  isSelect: boolean;
  inStock: number;
  description: string;
}
