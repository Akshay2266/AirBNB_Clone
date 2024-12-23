import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";
import { UserSignUp } from "../api";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/reducers/userSlice";
import { openSnackbar } from "../redux/reducers/snackbarSlice";

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.secondary};
`;
const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.secondary + 90};
`;

const Signup = ({ setOpenAuth }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await UserSignUp(form);
      dispatch(loginSuccess(response.data));
      dispatch(
        openSnackbar({ message: "Signup successful!", severity: "success" })
      );
      setOpenAuth(false);
    } catch (error) {
      dispatch(
        openSnackbar({
          message: error.response?.data?.message || "Signup failed",
          severity: "error",
        })
      );
    }
  };

  return (
    <Container>
      <Title>Create an Account</Title>
      <Span>Welcome! Please fill out the form to sign up.</Span>
      <TextInput
        label="Username"
        name="username"
        value={form.username}
        onChange={handleChange}
      />
      <TextInput
        label="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <TextInput
        label="Password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />
      <Button title="Sign Up" onClick={handleSubmit} />
    </Container>
  );
};

export default Signup;
