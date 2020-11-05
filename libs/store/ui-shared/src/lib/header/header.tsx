import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

import './header.less';

const useStyles = makeStyles(theme => ({
  root: { flexGrow: 1 },
  menuButton: { marginRight: theme.spacing(2) },
  title: { flexGrow: 1 }
}));

/* eslint-disable-next-line */
export interface HeaderProps {
  title: string;
}

/**
 * TODO: investigate why `npx nx generate @nrwl/react:storybook-configuration store-ui-shared --configureCypress --generateStories --dryRun` didn't create storybook file
 */
export function Header({ title }: HeaderProps): JSX.Element {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title} >
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};