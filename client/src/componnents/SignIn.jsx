import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";
import { UserSignIn } from "../api";
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

const TextButton = styled.div`
  width: 100%;
  text-align: end;
  color: ${({ theme }) => theme.secondary + 90};
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  font-weight: 500;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const SignIn = ({ setOpenAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignIn = async () => {
    try {
      const response = await UserSignIn({ email, password });
      dispatch(loginSuccess(response.data));
      dispatch(openSnackbar({ message: "Login successful!", type: "success" }));
      setOpenAuth(false); // Close the modal after successful login
    } catch (error) {
      dispatch(
        openSnackbar({
          message: error.response?.data?.message || "Login failed!",
          type: "error",
        })
      );
    }
  };

  return (
    <Container>
      <div>
        <Title>Sign In</Title>
        <Span>Welcome back! Please log in to your account.</Span>
      </div>
      <TextInput
        type="email"
        label="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextButton>Forgot Password?</TextButton>
      <Button onClick={handleSignIn}>Sign In</Button>
    </Container>
  );
};

export default SignIn;
