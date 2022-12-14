import { ProductType } from "../types/ProductType";
import { CartItem } from "../types/CartItem";

export interface Store {
  kickscooters: Kickscooter[];

  accessories: {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    inStock: number;
  }[];

  cart: CartItem[];

  isDesktop: boolean | null;

  orders: Order[];
}

export interface Order {
  id: string;
  items: ProductTypeWithCategory[];
  userInfo: string[];
}
type ProductTypeWithCategory = ProductType & { category: string };

export interface Kickscooter {
  id: string;
  title: string;
  price: number;
  image: string;
  isSelect: boolean;
  inStock: number;
  gift: string;
  gallery: {
    image: string;
  }[];
  delivery: {
    title: string;
    subtitle: string;
    text: string;
    ico: string;
  };
  warranty: {
    title: string;
    subtitle: string;
    text: string;
    years: string;
    extend: {};
  };
  support: {
    title: string;
    subtitle: string;
    text: string;
    ico: string;
  };
  description: {
    title: string;
    subtitle: string;
    text: string;
    miles: string;
  };
  packingList: string;
  youtubeVideo: string;
}

const initialState: Store & { orders: Order[] } = {
  kickscooters: [],
  accessories: [],
  cart: [],

  isDesktop: true,

  orders: [],
};

export default initialState;
