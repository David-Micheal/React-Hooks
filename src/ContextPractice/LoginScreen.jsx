import React from "react";
import { useContext } from "react";
import { UseContext } from "./UseContextHook";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();
  const { setName, setEmail } = useContext(UseContext);

  const registerUser = () => {
    navigate("/homepage");
  };

  return (
    <center>
      <h1>Register Now...!</h1>
      <br />
      <br />
      <br />
      <br />
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter your name"
      />
      <br />
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Enter your Email"
      />
      <br />
      <button onClick={registerUser}>Submit</button>
    </center>
  );
};

export default LoginScreen;
