import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

const CardWrapper = styled("div")(() => ({
  width: "800px",
  height: "500px",
  border: "1px solid #CDB699",
  borderRadius: "20px",
}));

const CardContainer = styled("div")(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  margin: "20px auto",
}));

const LargerCard = () => {
  return (
    <CardContainer>
      <CardWrapper>
        <h1>Hello Larger Card</h1>
      </CardWrapper>
    </CardContainer>
  );
};

LargerCard.propTypes = {
  bg: PropTypes.string,
};

LargerCard.defaultProps = {
  bg: "",
};

export default LargerCard;
