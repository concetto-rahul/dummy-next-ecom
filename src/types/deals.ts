export type DealItem = {
  id: number;
  title: string;
  discount: string;
  image: string;
};

export type DealList = DealItem[];

export type WeeklyDealItem = {
  id: number;
  title: string;
  image: string;
};

export type WeeklyDealsList = WeeklyDealItem[];
