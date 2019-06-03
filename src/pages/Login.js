import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button } from "@material-ui/core";
import logo from "../assets/images/octo-ead-2-coral.fw.png";

const styles = {
  root: {
    backgroundColor: "#ff8b61",
    "grid-gap": "1rem",
    display: "grid",
    "grid-template-columns": "1fr",
    "justify-items": "center",
    "align-items": "center",
    height: "100vh"
  },
  form: {
    display: "grid",
    "justify-items": "center",
    backgroundColor: "white",
    padding: "1rem",
    "border-radius": "5px",
    width: "300px"
  },
  btnEnter: {
    margin: "2rem",
    backgroundColor: "#ff8b61",
    color: "white",
    width: "100%",
    "&:hover": {
      "background-color": "black",
      color: "white"
    }
  },
  btnLostPassword: {
    backgroundColor: "transparent",
    width: "100%",
    "&:hover": {
      "background-color": "black",
      color: "white"
    }
  },
  title: {
    "font-weight": "bold",
    color: "#ff8b61"
  },
  email: {
    width: "100%"
  }
};

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleInput = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    const { classes } = this.props;
    const { email, password } = this.state;
    return (
      <>
        <div className={classes.root}>
          <form className={classes.form}>
            <img src={logo} width="80" />
            <Typography className={classes.title} variant="h4">
              Octo
            </Typography>
            <TextField
              id="email"
              label="email"
              className={classes.email}
              value={email}
              onChange={this.handleInput}
              margin="normal"
            />
            <TextField
              id="password"
              label="password"
              type="password"
              className={classes.email}
              value={password}
              onChange={this.handleInput}
              margin="normal"
            />
            <Button size="small" className={classes.btnEnter}>
              Entrar
            </Button>
            <Button size="small" className={classes.btnLostPassword}>
              Esqueci a senha
            </Button>
          </form>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(Login);
