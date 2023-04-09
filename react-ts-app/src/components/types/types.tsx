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
  title: string | undefined;
  dateDelivery: string | undefined;
  countryDelivery: string | undefined;
  inStock: boolean | string | undefined;
  onOrder: boolean | string | undefined;
  kindOfPay: boolean | string | undefined;
  imagePath: string | undefined;
}

export interface IState {
  typeInput: string;
  valueTextInput: string | undefined;
  valueDateInput: string | undefined;
  valueSelectInput: string | undefined;
  valueCheckBoxStock: boolean | string | undefined;
  valueCheckBoxOrder: boolean | string | undefined;
  valueCheckBoxPay: boolean | string | undefined;
  valueFileInput: string | undefined;
}

export type Info = {
  count: number;
  pages: string;
  next: string;
  prev: string | null;
};

export type Origin = {
  name: string;
  url: string;
};

export type Location = {
  name: string;
  url: string;
};

export interface IResponceData {
  info: Info;
  results: [
    {
      id: number;
      name: string;
      status: string;
      species: string;
      type: string;
      gender: string;
      origin: Origin;
      location: Location;
      image: string;
      episode: [string];
      url: string;
      created: string;
    }
  ];
}
