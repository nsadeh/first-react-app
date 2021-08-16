import React, { FunctionComponent } from "react";
import "./styles.scss";
import "semantic-ui-css/semantic.min.css";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Toolbar
} from "@material-ui/core";
import RestoreIcon from "@material-ui/icons/Restore";

const App: FunctionComponent = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar></Toolbar>
      </AppBar>
      <BottomNavigation>
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      </BottomNavigation>
    </div>
  );
};

export default App;
