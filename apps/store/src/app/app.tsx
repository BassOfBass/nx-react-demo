import React from 'react';
import { 
  Card, 
  CardActionArea, 
  CardContent, 
  CardMedia, 
  Typography 
} from "@material-ui/core";

import './app.less';
import { Header } from "@nx-react-demo/store/ui-shared";
import { games } from "../api";

export function App() {
  
  return (
    <>
      <Header />
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
      {games.map((game) => 
        (<Card key={game.id} className="gamecard">
          <CardActionArea className="details">
            <CardMedia
              className="media"
              image={game.image}
              title={game.name} 
            />
            <CardContent className="content">
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
                className="rating"
              >
                <strong>Rating:</strong> {game.rating}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>)
      )}
    </section>
  );
}
