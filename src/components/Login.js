import React from "react";
import styled from "styled-components";
import * as Yup from "yup";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { Form, Input } from "@rocketseat/unform";
import { fakeAuth } from "../utils";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("email inválido")
    .required("campo obrigatório"),
  password: Yup.string()
    .min(4, "a senha deve possuir 4 ou mais caracteres")
    .required("campo obrigatório")
});

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  background-color: black;
  height: 100vh;
`;

const StyledForm = styled(Form)`
  display: grid;
  grid-gap: 1rem;
  background-color: white;
  width: 300px;
  border-radius: 4px;
  padding: 1rem;
`;

const StyledTitle = styled.h1`
  text-align: center;
`;

const StyledInputEmail = styled(Input)`
  padding: 0.7rem;
  border: 1px solid #eee;
  border-radius: 4px;
`;

const StyledInputPassword = styled(Input)`
  padding: 0.7rem;
  border: 1px solid #eee;
  border-radius: 4px;
`;

const StyledEnterButton = styled.button`
  padding: 0.7rem;
  border: none;
  border-radius: 4px;
  background-color: black;
  color: white;
`;

const StyledLostPassword = styled.a`
  text-align: center;
`;

const StyledNewUser = styled.a`
  text-align: center;
`;

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "white",
    color: "black",
    margin: "auto"
  }
}));

const MySnackbarContentWrapper = props => {
  const classes = useStyles();
  const { className, message, onClose, variant, ...other } = props;

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      message={
        <span id="client-snackbar" className={classes.message}>
          {message}
        </span>
      }
    />
  );
};

const Login = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { history } = props;

  const handleSubmit = (data, { resetForm }) => {
    setOpen(true);

    // fake auth
    fakeAuth.authenticate(true);

    fakeAuth.isAuthenticated
      ? setInterval(() => {
          history.push("/dashboard");
        }, 2000)
      : history.push("/");
  };

  return (
    <Wrapper>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        open={open}
        autoHideDuration={2000}
      >
        <SnackbarContent message={"logado com sucesso !"} className={classes.root} />
      </Snackbar>
      <StyledForm schema={schema} onSubmit={handleSubmit}>
        <StyledTitle>Octo EAD</StyledTitle>
        <StyledInputEmail name="email" placeholder="nome de usuário ou email" />
        <StyledInputPassword
          name="password"
          placeholder="senha"
          type="password"
        />
        <StyledEnterButton type="submit">entrar</StyledEnterButton>
        <StyledLostPassword href="/">esqueci minha senha</StyledLostPassword>
        <StyledNewUser href="/">cadastrar novo usuário</StyledNewUser>
      </StyledForm>
    </Wrapper>
  );
};

export default Login;

/*
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
*/
