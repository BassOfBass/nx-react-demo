class GameEntry {
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

export const games = [
  new GameEntry(
    "settlers-in-the-can",
    "Settlers in the Can",
    "./assets/beans.jpg",
    "Help your bug family claim the best real estate in a spilled can of beans",
    35,
    Math.random(),
  ),
  new GameEntry(
    "chess-pie",
    "Chess Pie",
    "./assets/chess.jpg",
    "A circular game of Chess that you can eat as you play",
    15,
    Math.random(),
  ),
  new GameEntry(
    "purrfection",
    "Purrfection",
    "./assets/cat.jpg",
    "A cat grooming contest goes horrible wrong",
    45,
    Math.random(),
  ),
];

export function getGame( id: string ) {
  return games.find(game => game.id === id );
}