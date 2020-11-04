import React from 'react';
import { RouteComponentProps } from "react-router-dom";
import { Card, CardActionArea, CardContent, Typography } from "@material-ui/core";

import './store-feature-game-detail.less';

type TParams = { id: string };

/* eslint-disable-next-line */
export interface StoreFeatureGameDetailProps extends RouteComponentProps<TParams> {}

export const StoreFeatureGameDetail = (props: StoreFeatureGameDetailProps) => {
  return (
    <article className="gamedetails">
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.match.params.id}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </article>
  );
};

export default StoreFeatureGameDetail;
