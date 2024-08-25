export interface PropertyPayload {
  name: string;
  price: number;
  image: string;
}

export interface PropertyModel {
  id: string;
  image: string;
  name: string;
  price: string | number;
}
