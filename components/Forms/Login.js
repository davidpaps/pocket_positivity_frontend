import React, { useState } from "react";
import axios from "axios";
import { Button, Card, TextInput } from "react-native-paper";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const apiPost = () => {
    axios
      .post("https://help-for-heroes.herokuapp.com/users", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
        alert("Success");
      })
      .catch((error) => {
        console.log(error);
        alert("Please try again later.");
      });
  };

  const wipeForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = () => {
    wipeForm();
  };

  return (
    <Card>
      <TextInput
        label="Username"
        value={username}
        autoFocus={true}
        autoCompleteType="username"
        onChangeText={(input) => setUsername(input)}
      />
      <TextInput
        label="Password"
        value={password}
        textContentType="newPassword"
        passwordRules="required: lower; required: upper; required: digit; required: [-]; minlength: 6; maxlength: 20;"
        onChangeText={(input) => setPassword(input)}
      />
      <Button onPress={handleSubmit}>Submit</Button>
    </Card>
  );
};

export default Login;
