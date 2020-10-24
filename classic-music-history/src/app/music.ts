export interface Music {
  composers: Composer[];
}

export interface Composer {
  id: string;
  name: string;
  complete_name: string;
  birth: string;
  epoch: string;
  portrait: string;
}