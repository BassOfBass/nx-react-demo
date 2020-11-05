import { GameEntry } from "@nx-react-demo/api/util-interfaces";

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