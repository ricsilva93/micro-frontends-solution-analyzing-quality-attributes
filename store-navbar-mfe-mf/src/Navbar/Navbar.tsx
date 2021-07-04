import * as React from "react"
import { AppBar, Toolbar, IconButton, Box, makeStyles, Badge } from "@material-ui/core"
import { Home, History } from "@material-ui/icons"
import { NavStyle } from "./Navbar.styles";
import { HistoryButtonStyle } from "./HistoryButton.Styles";
import { Link } from 'react-router-dom';
import clsx from "clsx";
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from "../Utils/ErrorFallback";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: 240,
    width: `calc(100% - 240px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }
}));

const RemoteCart = React.lazy(() => import("CartComponent/CartComponent"));

const Navbar: React.FC = () => {
  const classes = useStyles();

  return (

    <NavStyle>
      <AppBar position="absolute" className={clsx(classes.appBar)}>
        <Toolbar className={clsx(classes.toolbar)}>

          <IconButton edge="start" color="inherit" aria-label="home" component={Link} to="/">
            <Home />
          </IconButton>
          <Box display='flex' flexGrow={1} />

            <HistoryButtonStyle>
              <IconButton edge="start" color="inherit" aria-label="purchase-history" component={Link} to="/purchase-history">
                <History />
                History
              </IconButton>
            </HistoryButtonStyle>
            <React.Suspense fallback="Loading Cart">
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <RemoteCart />
            </ErrorBoundary>
          </React.Suspense>
        </Toolbar>
      </AppBar>
    </NavStyle>
  )
}

export default Navbar;