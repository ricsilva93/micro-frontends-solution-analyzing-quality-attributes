import { CssBaseline, makeStyles } from "@material-ui/core";
import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  HashRouter
} from "react-router-dom";
import { ErrorFallback } from "./Utils/ErrorFallback";

import Navbar from "./Navbar/Navbar";
import {Routes} from "./Routes";

const App = () => {
  const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  }));
  
  const classes = useStyles();
  return(
<CssBaseline>
<main className={classes.content}>
<ErrorBoundary
              FallbackComponent={ErrorFallback}
            >
        
        <HashRouter basename="/">
        <Navbar />
        <div className={classes.appBarSpacer} />
            <Routes />
        </HashRouter >
        
        </ErrorBoundary>
        </main>
        </CssBaseline>
  );
}

export default App;
