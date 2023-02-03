import "./App.css";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import wlogo from "./assets/wlogo.png";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(true);
  return (
    <Grid
      sx={{
        height: "100vh",
        backgroundColor: "#f9f9f9",
      }}
      justifyContent={"center"}
      alignItems="center"
      container
    >
      <Box
        sx={{
          position: "absolute",
          left: "50px",
          top: "30px",
        }}
      >
        <img src={wlogo} alt="logo" width="160px" />
      </Box>
      {/* Login */}
      <Grid
        item
        xs={4}
        sx={{
          display: showLogin ? "block" : "none",
        }}
      >
        <Container
          sx={{
            backgroundColor: "white",
            borderRadius: "12px",
            height: "441px",
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
            padding: "30px",
            pt: "60px",
          }}
        >
          <Grid container justifyContent={"center"}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  fontFamily: "Inter",
                  fontWeight: "500",
                }}
              >
                <img src={wlogo} alt="logo" width="100px" />
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  fontFamily: "Inter",
                  fontWeight: "500",
                  fontSize: "24px",
                  color: "#343434",
                }}
              >
                Sign in to your Account
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                marginTop: "30px",
                color: "#545454",
                fontWeight: "500",
                fontSize: "14px",
              }}
              xs={10}
            >
              <Typography>Email/Username</Typography>
            </Grid>
            <Grid item xs={10}>
              <TextField
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    border: "1px solid #CED4DA",
                  },
                }}
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="e.g. john@example.com"
                fullWidth
              />
            </Grid>
            <Grid
              item
              sx={{
                marginTop: "20px",
                color: "#545454",
                fontWeight: "500",
                fontSize: "14px",
              }}
              xs={10}
            >
              <Typography>Password</Typography>
            </Grid>
            <Grid item xs={10}>
              <TextField
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    border: "1px solid #CED4DA",
                  },
                }}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="e.g. *********"
                fullWidth
              />
            </Grid>
            <Grid item xs={10}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  marginTop: "40px",
                  borderRadius: "0px",
                  boxShadow: "none",
                }}
                onClick={() => {
                  alert("Welcome " + email + "!" + password);
                }}
              >
                Log In
              </Button>
            </Grid>
          </Grid>
        </Container>
        <Grid item xs={12}>
          <Typography
            sx={{
              textAlign: "center",
              mt: "20px",
              fontFamily: "Inter",
              fontWeight: "500",
              fontSize: "14px",
              color: "#545454",
            }}
          >
            New Here?
            <Button
              variant="text"
              sx={{
                textDecoration: "underline",
                textTransform: "none",
              }}
              onClick={() => setShowLogin(false)}
            >
              Create an account
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              textAlign: "center",
              mt: "20px",
              fontFamily: "Inter",
              fontWeight: "500",
              fontSize: "14px",
              color: "#545454",
            }}
          >
            Term of Use | Privacy Policy
          </Typography>
        </Grid>
      </Grid>
      {/* Signup */}
      <Grid
        item
        xs={4}
        sx={{
          display: showLogin ? "none" : "block",
        }}
      >
        <Container
          sx={{
            backgroundColor: "white",
            borderRadius: "12px",
            height: "541px",
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
            padding: "30px",
            pt: "60px",
          }}
        >
          <Grid container justifyContent={"center"}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  fontFamily: "Inter",
                  fontWeight: "500",
                }}
              >
                <img src={wlogo} alt="logo" width="100px" />
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  fontFamily: "Inter",
                  fontWeight: "500",
                  fontSize: "24px",
                  color: "#343434",
                }}
              >
                Sign up to Wobot.ai
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                marginTop: "30px",
                color: "#545454",
                fontWeight: "500",
                fontSize: "14px",
              }}
              xs={10}
            >
              <Typography>Email</Typography>
            </Grid>
            <Grid item xs={10}>
              <TextField
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    border: "1px solid #CED4DA",
                  },
                }}
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="e.g. john@example.com"
                fullWidth
              />
            </Grid>
            <Grid
              item
              sx={{
                marginTop: "30px",
                color: "#545454",
                fontWeight: "500",
                fontSize: "14px",
              }}
              xs={10}
            >
              <Typography>Username</Typography>
            </Grid>
            <Grid item xs={10}>
              <TextField
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    border: "1px solid #CED4DA",
                  },
                }}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="e.g. john123"
                fullWidth
              />
            </Grid>
            <Grid
              item
              sx={{
                marginTop: "20px",
                color: "#545454",
                fontWeight: "500",
                fontSize: "14px",
              }}
              xs={10}
            >
              <Typography>Password</Typography>
            </Grid>
            <Grid item xs={10}>
              <TextField
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    border: "1px solid #CED4DA",
                  },
                }}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="e.g. *********"
                fullWidth
              />
            </Grid>
            <Grid item xs={10}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  marginTop: "40px",
                  borderRadius: "0px",
                  boxShadow: "none",
                }}
                onClick={() => {
                  alert("Welcome " + email);
                }}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Container>
        <Grid item xs={12}>
          <Typography
            sx={{
              textAlign: "center",
              mt: "20px",
              fontFamily: "Inter",
              fontWeight: "500",
              fontSize: "14px",
              color: "#545454",
            }}
          >
            Already Have An Account?
            <Button
              variant="text"
              sx={{
                textDecoration: "underline",
                textTransform: "none",
              }}
              onClick={() => setShowLogin(true)}
            >
              Login to your account
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
