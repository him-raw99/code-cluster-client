import React from "react";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendSignupData } from "../../features/auth/authSlice";
import "./LoginForm.css"

function LoginForm(props) {
  const [err, setErr] = useState(false);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  function handelChange(event) {
    const { name, value } = event.target;
    setUserData((prevVal) => ({ ...prevVal, [name]: value }));
  }

  function handelSubmit() {
    if (userData.password === userData.confirmPassword) {
      // dispatch(sendSignupData(userData))
      console.log(userData);
      setErr(false);
    } else {
      setErr(true);
    }
  }

  function handelNewUser() {
    props.setNewUser(false);
  }
  return (
    <div className="login__form">
    <div className="login__form__heading">
        SIGN UP
      </div>
      <p className="login__form__subheading">
        Signup to create your local code-space
      </p>
      <TextField
        onChange={handelChange}
        name="name"
        className="login-form-inputs"
        label="Name"
        variant="outlined"
        margin="normal"
        fullWidth
        sx={{ backgroundColor: "rgba(239, 239, 239, 0.461)" }}
      />
      <TextField
        onChange={handelChange}
        name="username"
        className="login-form-inputs"
        label="Username"
        variant="outlined"
        margin="normal"
        fullWidth
        sx={{ backgroundColor: "rgba(239, 239, 239, 0.461)" }}
      />
      <TextField
        onChange={handelChange}
        error={err}
        name="password"
        className="login-form-inputs"
        label="Password"
        type={"password"}
        variant="outlined"
        margin="normal"
        fullWidth
        sx={{ backgroundColor: "rgba(239, 239, 239, 0.461)" }}
      />
      <TextField
        onChange={handelChange}
        error={err}
        helperText={err ? "Your passwords dont match." : ""}
        name="confirmPassword"
        className="login-form-inputs"
        label="Confirm Password"
        type={"password"}
        variant="outlined"
        margin="normal"
        fullWidth
        sx={{ backgroundColor: "rgba(239, 239, 239, 0.461)" }}
      />
      <Button
        onClick={handelSubmit}
        variant="contained"
        color="success"
        sx={{ marginTop: "5%" }}
        fullWidth
      >
        SignUp
      </Button>
      <p className="signup__button">
        Already registered with us?{" "}
        <Button onClick={handelNewUser}>Login</Button>{" "}
      </p>
    </div>
  );
}

export default LoginForm;
