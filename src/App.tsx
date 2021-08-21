import React, { FunctionComponent } from "react";
import "./styles.css";
import "semantic-ui-css/semantic.min.css";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Card,
  CardContent,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import EqualizerRoundedIcon from "@material-ui/icons/EqualizerRounded";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AttachMoneyOutlinedIcon from "@material-ui/icons/AttachMoneyOutlined";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";

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
        <Toolbar className="appbar">
          <IconButton aria-label="home">
            <HomeOutlinedIcon className="home-button" />
          </IconButton>
          <IconButton aria-label="money">
            <AttachMoneyOutlinedIcon className="appbar-icon" />
          </IconButton>
          <IconButton aria-label="calendar">
            <DateRangeOutlinedIcon className="appbar-icon" />
          </IconButton>
          <IconButton>
            <ChatBubbleOutlineOutlinedIcon className="appbar-icon" />
          </IconButton>
          <IconButton>
            <MenuOutlinedIcon className="appbar-icon" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Profiles profiles={profiles} />
      <BottomNavigation className="bottom-navbar">
        <BottomNavigationAction
          label="client"
          icon={<PersonOutlineRoundedIcon />}
          className="bottom-icon"
        />
        <BottomNavigationAction
          label="add-item"
          icon={<AddCircleOutlineRoundedIcon className="plus-icon" />}
        />
        <BottomNavigationAction
          label="numbers"
          icon={<EqualizerRoundedIcon />}
          className="bottom-icon"
        />
      </BottomNavigation>
    </div>
  );
};

export default App;
