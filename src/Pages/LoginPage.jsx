import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import { YouTube, Instagram, Facebook } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    //clearStorage.celar()
    if (user) {
      if (user.email === email && user.password === password) {
        window.alert("Login Successful!");
        navigate("./homepage");
      } else {
        window.alert("wrong user name and password!");
      }
    } else {
      window.alert("user not found! Please register first.");
      navigate("/registrationpage");
    }
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Paper
          elevation={5}
          sx={{
            width: "350px",
            height: "400px",
            padding: "15px",
            borderRadius: "20px",
          }}
        >
          <Stack spacing={3}>
            <Typography variant="h3">SignIn</Typography>
            <TextField
              required
              id="outlined-required"
              label="Email"
              type="email"
              value={email}
              variant="outlined"
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Password"
              type="password"
              value={password}
              variant="outlined"
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button variant="contained" size="large" onClick={handleLogin}>
              Login{" "}
            </Button>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button variant="contained" size="small" color="success">
                Register{" "}
              </Button>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <a href="https://www.youtube.com/" target="black">
                <YouTube color="error" fontSize="large" />
              </a>
              <a href="https://www.instagram.com" target="black">
                <Instagram color="warning" fontSize="large" />
              </a>
              <a href="https://www.facebook.com" target="black">
                <Facebook color="info" fontSize="large" />
              </a>
            </Box>
          </Stack>
        </Paper>
      </Box>
    </div>
  );
};

export default LoginPage;
