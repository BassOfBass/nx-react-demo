import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

import './app.less';
import { Header } from '@nx-react-demo/store/ui-shared';
import { StoreFeatureGameDetail } from '@nx-react-demo/store/feature-game-detail';
import { GameEntry } from "@nx-react-demo/api/util-interfaces";
import { formatRating } from '@nx-react-demo/store/util-formatters';

function App() {
  return (
    <>
      <Header title="Board Games" />
      <main data-testid="app-container">
        <GamesLayout />
      </main>
    </>
  );
}

function GamesLayout() {
  const history = useHistory();
  const [games, setGames] = React.useState<{
    data: GameEntry[];
    loadingState: "success" | "error" | "loading"
  }>({ 
    data: [], loadingState: "success" 
  });

  React.useEffect(() => {

    (async () => {
      try {
        setGames({
          ...games,
          loadingState: "loading"
        });

        const response = await fetch("/api/games");
        const fetchedGames = await response.json();
        
        setGames({
          ...games,
          data: fetchedGames,
          loadingState: "success"
        });
      } catch (error) {
        setGames({
          ...games,
          loadingState: "error"
        })
      }
    })();
    
  }, [games]);

  return (
    <>
      <section className="games">
        {games.loadingState === "loading" 
          ? "Loading..." 
          : games.loadingState === "error" 
            ? "Error retrieving the list of games"
            : ( games.data.map((game) => (
                <Card 
                  key={game.id} 
                  className="gamecard" 
                  onClick={() => history.push(`/game/${game.id}`)}
                >
                  <CardActionArea className="details">
                    <CardMedia className="media" image={game.image} title={game.name} />
                    <CardContent className="content">
                      <Typography gutterBottom variant="h5" component="h2">
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
                        <strong>Rating:</strong> {formatRating(game.rating)}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
          )))
        }
      </section>
      <Route path="/game/:id" component={StoreFeatureGameDetail} />
    </>
  );
}

export default App;
