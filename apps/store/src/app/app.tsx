import React from 'react';

import './app.less';
import { 
  Card, 
  CardActionArea, 
  CardContent, 
  CardMedia, 
  Typography 
} from "@material-ui/core";
import { games } from "../api";

export function App() {
  
  return (
    <>
      <main>
        <GamesLayout />
      </main>
    </>
  );
};

/**
 * TODO: fix material-ui components not loading.
 */
function GamesLayout() {

  return (
    <section className="games">
      {games.map((game) => {
        <Card key={game.id} className="gamecard">
          <CardActionArea>
            <CardMedia
              className="gamecardmedia"
              image={game.image}
              title={game.name} 
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" >
                {game.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {game.description}
              </Typography>
              <Typography 
                variant="body2" 
                color="textSecondary" 
                component="p" 
                className="game-rating"
              >
                <strong>Rating:</strong> {game.rating}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      })}
    </section>
  );
}
