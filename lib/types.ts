export interface Product {
  id: number;
  title: string;
  price: number;
  created_at: Date | string;
  photo: string | null;
}
