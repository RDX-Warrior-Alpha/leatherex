
export enum LeatherGrade {
  FULL_GRAIN = 'Full Grain',
  TOP_GRAIN = 'Top Grain',
  GENUINE = 'Genuine',
  SPLIT = 'Split'
}

export enum TanningType {
  VEGETABLE = 'Vegetable Tanned',
  CHROME = 'Chrome Tanned',
  SYNTHETIC = 'Synthetic'
}

export interface Product {
  id: string;
  name: string;
  category: string;
  grade: LeatherGrade;
  tanning: TanningType;
  origin: string;
  moq: string;
  image: string;
  description: string;
  isBestSeller?: boolean;
  isNew?: boolean;
}

export interface NavItem {
  label: string;
  path: string;
}
