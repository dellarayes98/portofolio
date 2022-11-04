import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

const SlidingAnim = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "8vh",
  justifyContent: "center",
  alignItems: "center",
  "@-webkit-keyframes slide": {
    "0%": {
      opacity: 0,
      transform: "translateY(-5vh)",
    },
    "20%": {
      opacity: 1,
      transform: "translateY(-3vh)",
    },
    "80%": {
      opacity: 1,
      transform: "translateY(3vh)",
    },
    "100%": {
      opacity: 0,
      transform: "translateY(5vh)",
    },
  },
  "@keyframes slide": {
    "0%": {
      opacity: 0,
      transform: "translateY(-5vh)",
    },
    "20%": {
      opacity: 1,
      transform: "translateY(-3vh)",
    },
    "80%": {
      opacity: 1,
      transform: "translateY(3vh)",
    },
    "100%": {
      opacity: 0,
      transform: "translateY(5vh)",
    },
  },
}));

const Arrow = styled("div")(() => ({
  width: "30px",
  height: "30px",
  borderBottom: "10px solid #809A6F",
  borderLeft: "10px solid #809A6F",
  transform: "rotate(-45deg)",
  margin: -10,
}));

const Sliding = styled("div")(() => ({
  // position: "absolute",
  // "    -webkit-animation": "slide 1s linear infinite",
  animation: "slide 1s linear infinite",
}));

const SlidingDelay1 = styled("div")(() => ({
  // "    -webkit-animation": "slide 1s linear infinite",
  animation: "slide 1s linear infinite",
  // "animation-delay": "slide 1.5s linear infinite",
}));

const ArrowSliding = () => {
  return (
    <SlidingAnim>
      <Sliding>
        <Arrow></Arrow>
      </Sliding>
      <SlidingDelay1>
        <Arrow></Arrow>
      </SlidingDelay1>
    </SlidingAnim>
  );
};

ArrowSliding.propTypes = {
  bg: PropTypes.string,
};

ArrowSliding.defaultProps = {
  bg: "",
};

export default ArrowSliding;
