export type Organizer = {
  name: string;
  email: string;
  twitterUrl: string;
  instagram: string;
  phone: string;
};

export type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  address: string;
  city: string;
  country: string;
  long: string;
  lat: string;
  category: string;
  imageUrl: string;
  price: number;
  description: string;
  organizer: Organizer;
};
