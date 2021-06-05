export interface Pizza {
  _id: string,
  name: string,
  slug?: string,
  imageUrl?: string,
  description: string,
  toppings: string[],
  __v?: number,
}