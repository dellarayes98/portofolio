import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

const CardWrapper = styled("div")(() => ({
  width: "300px",
  height: "500px",
  border: "1px solid #FFD1D1",
  borderRadius: "20px",
  gap: "20px",
}));

const CardContainer = styled("div")(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
}));

const Cards = () => {
  return (
    <CardContainer>
      <CardWrapper>
        <h1>Hello</h1>
      </CardWrapper>
      <CardWrapper>
        <h1>Hello</h1>
      </CardWrapper>
      <CardWrapper>
        <h1>Hello</h1>
      </CardWrapper>
      <CardWrapper>
        <h1>Hello</h1>
      </CardWrapper>
      <CardWrapper>
        <h1>Hello</h1>
      </CardWrapper>
      <CardWrapper>
        <h1>Hello</h1>
      </CardWrapper>
    </CardContainer>
  );
};

Cards.propTypes = {
  bg: PropTypes.string,
};

Cards.defaultProps = {
  bg: "",
};

export default Cards;
