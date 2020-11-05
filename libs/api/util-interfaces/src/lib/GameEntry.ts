export class GameEntry {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  rating: number;

  constructor(id: string, name: string, image: string, description: string, price: number, rating: number) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.price = price;
    this.rating = rating;
  }
}