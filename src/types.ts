type Rates = {
  [key: string]: number;
};

export type Data = {
  base: string;
  date: string;
  rates: Rates;
};
