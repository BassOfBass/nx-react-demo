import * as express from 'express';
import { games, getGame } from "./app/games-repository";
const port = process.env.port || 3333;
const app = express();

app.get('/api/games', (req, res) => {
  res.send(games);
});

app.get('/api/games/:id', (req, res) => {
  res.send(getGame(req.params.id))
});

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.addListener('error', console.error);
