export interface Product {
  id: string;
  updated_at: Date;
  image: string;
  name: string;
  description: string;
  visibility: "PRIVATE" | "PUBLIC";
  price: number;
  currency: string;
}
