import React from "react";
import { Button, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, sendLoginData} from "../../features/auth/authSlice";

function LoginForm(props) {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [seePassword, setSeePassword] = useState(false);

  function handelChange(event) {
    const { name, value } = event.target;
    setUserData((prevVal) => ({ ...prevVal, [name]: value }));
  }

  function handelNewUser() {
    props.setNewUser(true);
  }

  function handelShowPassword() {
    setSeePassword((prevVal) => !prevVal);
  }

  return (
    <div className="login__form">
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
        name="password"
        className="login-form-inputs"
        label="Password"
        type={seePassword ? "text" : "password"}
        variant="outlined"
        margin="normal"
        fullWidth
        sx={{ backgroundColor: "rgba(239, 239, 239, 0.461)" }}
      />
      <div className="see-password">
        <Checkbox onClick={handelShowPassword} /> Show password
      </div>
      <Button
        onClick={() => {
          dispatch(sendLoginData(userData));
        }}
        variant="contained"
        color="success"
        sx={{ marginTop: "5%" }}
        fullWidth
      >
        login
      </Button>
      <p className="signup__button">
        not registered with us?{" "}
        <Button onClick={handelNewUser}>SignUp Now</Button>{" "}
      </p>
    </div>
  );
}

export default LoginForm;
