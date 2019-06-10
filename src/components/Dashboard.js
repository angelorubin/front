import React, { useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles(() => ({
  root: {},
  nested: {
    paddingLeft: "1rem"
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Wrapper className={classes.root}>
      <WrapperLogoMenu>
        <Logo>
          <Typography variant="h6">Logo</Typography>
        </Logo>
        <TopNavbar>
          <div>dashboard</div>
          <div>menu-left</div>
        </TopNavbar>
      </WrapperLogoMenu>

      <WrapperSidebarContent>
        <Sidebar>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
          >
            <ListItem button>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText size="" primary="Curso 01" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Curso 02" />
            </ListItem>
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Sidebar>
        <Content>
          <Breadcrumbs aria-label="Breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick}>
              dashboard
            </Link>
            <Link
              color="inherit"
              href="/getting-started/installation/"
              onClick={handleClick}
            >
              Core
            </Link>
            <Typography color="textPrimary">Breadcrumb</Typography>
          </Breadcrumbs>
          <h3>Title Video</h3>
          <Card className={classes.card}>Card</Card>
        </Content>
      </WrapperSidebarContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const WrapperLogoMenu = styled.div`
  display: grid;
  grid-template-columns: 30vw 70vw;
`;

const WrapperSidebarContent = styled.div`
  display: grid;
  grid-template-columns: 30vw 70vw;
  height: 90vh;
`;

const Logo = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  background-color: #5fd2ae;
  color: white;
  padding: 0.5rem;
`;

const TopNavbar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  background-color: #ccc;
`;

const Sidebar = styled.div`
  background-color: #eee;
`;

const Content = styled.div`
  background-color: #fff;
`;

export default Dashboard;
