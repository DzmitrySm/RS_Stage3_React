export interface ICard {
  id: number;
  title: string;
  price: number;
  rating: number;
  brand: string;
  category: string;
  image: string;
}

export interface ICardOnSubmit {
  id: string;
  title: string | undefined;
  dateDelivery: string | undefined;
  countryDelivery: string | undefined;
  inStock: boolean | string | undefined;
  onOrder: boolean | string | undefined;
  kindOfPay: boolean | string | undefined;
  imagePath: string | undefined;
}
