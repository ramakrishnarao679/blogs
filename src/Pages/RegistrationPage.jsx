import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const [objData, setObjData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    mobileNum: "",
  });
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    mobileNum,
    gender,
  } = objData;

  const getData = (name, value) => {
    let data = { [name]: value };
    setObjData({ ...objData, ...data });
  };

  const submit = (e) => {
    e.preventDefault();
    if (!firstName) {
      window.alert("please enter first name");
    } else if (!lastName) {
      window.alert("please enter last name");
    } else if (!email) {
      wondow.alert("please enter valid email");
    } else if (!password) {
      window.alert("please enter password");
    } else if (password.length < 8) {
      window.alert("password should be at least 8 letters");
    } else if (confirmPassword !== password) {
      window.alert("password and confirmPassword not matched");
    } else if (!mobileNum) {
      window.alert("please enter mobile number");
    } else if (!gender) {
      window.alert("please click the the check box");
    } else {
      localStorage.setItem(
        "user",
        JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          mobileNum,
          gender,
        })
      );
      window.alert("Register successfuly!");
      Navigate("/loginpage");
    }
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "120vh",
        }}
      >
        <Paper
          elevation={5}
          sx={{
            width: "350px",
            height: "630px",
            padding: "15px",
            borderRadius: "20px",
          }}
        >
          <Stack spacing={3}>
            <Typography variant="h3">Registration</Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField
                required
                label="FirstName"
                variant="outlined"
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => getData(e.target.name, e.target.value)}
              />
              <TextField
                required
                label="LastName"
                variant="outlined"
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => getData(e.target.name, e.target.value)}
              />
            </Box>
            <TextField
              required
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              value={email}
              onChange={(e) => getData(e.target.name, e.target.value)}
            />
            <TextField
              required
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={password}
              onChange={(e) => getData(e.target.name, e.target.value)}
            />
            <TextField
              required
              label="confirmPassowrd"
              variant="outlined"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => getData(e.target.name, e.target.value)}
            />
            <TextField
              required
              label="Mobile Num"
              variant="outlined"
              type="number"
              name="mobileNum"
              value={mobileNum}
              onChange={(e) => getData(e.target.name, e.target.value)}
            />
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                type="radio"
                name="gender"
                value={gender}
                onChange={(e) => getData(e.target.name, e.target.value)}
              >
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Felmale"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
            <Button variant="contained" size="large" onClick={submit}>
              Rigister{" "}
            </Button>
          </Stack>
        </Paper>
      </Box>
    </div>
  );
};

export default RegistrationPage;
