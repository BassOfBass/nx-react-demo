import React from 'react';
import { RouteComponentProps } from "react-router-dom";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";

import './store-feature-game-detail.less';
import { formatRating } from '@nx-react-demo/store/util-formatters';
import { GameEntry } from "@nx-react-demo/api/util-interfaces";


type TParams = { id: string };

/* eslint-disable-next-line */
export interface StoreFeatureGameDetailProps extends RouteComponentProps<TParams> {}

/**
 * TODO: figure out typing involving Classes
 * @param props 
 */
export const StoreFeatureGameDetail = (props: StoreFeatureGameDetailProps) => {
  const [gameDetails, setDetails] = React.useState<{
    data: GameEntry;
    loadingState: "success" | "error" | "loading"
  }>({
    data: {},
    loadingState: "success"
  });

  React.useEffect(() => {

    (async () => {
      try {
        setDetails({
          ...gameDetails,
          loadingState: "loading"
        });
  
        const gameID = props.match.params.id;
        const response = await fetch(`/api/games/${gameID}`);
        const fetchedDetails = await response.json();
  
        setDetails({
          ...gameDetails,
          data: fetchedDetails,
          loadingState: "success"
        });
      } catch (error) {
        setDetails({
          ...gameDetails,
          loadingState: "error"
        })
      }
      

    })();

  }, [props.match.params.id]);

  return (
    <article className="gamedetails">
      {gameDetails.loadingState === "loading"
        ? "Loading..."
        : gameDetails.loadingState === "error"
          ? "Error fetching game details."
          : (
            <Card>
              <CardActionArea>
                <CardMedia
                  className="gamemedia"
                  image={gameDetails.data.image}
                  title={gameDetails.data.name}
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {gameDetails.data.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="gamerating"
                  >
                    <strong>Rating:</strong> {formatRating(gameDetails.data.rating)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          )
      }   
    </article>
  );
};

export default StoreFeatureGameDetail;
