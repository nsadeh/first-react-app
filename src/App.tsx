import React, { FunctionComponent } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Card,
  CardContent,
  Toolbar,
  Typography
} from "@material-ui/core";
import RestoreIcon from "@material-ui/icons/Restore";

const ProfileCard: React.FunctionComponent<IProfileProps> = (props) => {
  return (
    <Card className="person-card">
      <div>
        <CardContent className="person-card-con">
          <Typography component="h5">{props.message}</Typography>
        </CardContent>
      </div>
    </Card>
  );
};

type IProfileListProps = {
  profiles: Array<IProfileProps>;
};

type IProfileProps = {
  message: string;
};

const Profiles: React.FunctionComponent<IProfileListProps> = (props) => {
  return (
    <div className="profile-card-list">
      {props.profiles.map((p) => (
        <div>{ProfileCard(p)}</div>
      ))}
    </div>
  );
};

const profiles: Array<IProfileProps> = [
  { message: "I am a profile" },
  { message: "I, too, am a profile" }
];

const App: FunctionComponent = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar></Toolbar>
      </AppBar>
      <Profiles profiles={profiles} />
      <BottomNavigation className="bottom-navbar">
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      </BottomNavigation>
    </div>
  );
};

export default App;
