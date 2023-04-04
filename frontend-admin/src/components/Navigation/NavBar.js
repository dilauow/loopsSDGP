import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import HailIcon from "@mui/icons-material/Hail";
import "./navBar.css";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  function handleclick() {
    navigate("/loginpage");
  }

  const navigate2 = useNavigate();

  function handleclick2() {
    navigate2("/");
  }

  const navigate3 = useNavigate();

  function handleclick3() {
    navigate3("/jobpostpage");
  }

  return (
    <div className="navBarBox">
      <div className="navBarLeft">
        <span className="logo" onClick={handleclick2}>
          HireVision
        </span>
        <HailIcon className="personlogo" />
      </div>
      <div className="navBarCenter"></div>
      <div className="navBarRight">
        <div className="navBarLinks">
          <Stack spacing={3} className="buttons">
            <Button className="bt2" variant="Candidate" onClick={handleclick}>
              Sign-in
            </Button>
          </Stack>
          <Button className="bt2" variant="Candidate" onClick={handleclick3}>
            POST A JOB
          </Button>
        </div>
      </div>
    </div>
  );
}
