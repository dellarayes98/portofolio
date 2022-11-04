import React from "react";
import { styled } from "@mui/material/styles";

const FooterWrapper = styled("div")(() => ({
  //   gridArea: "footer",
  width: "100%",
  height: "300px",
  backgroundColor: "#809A6F",
}));

export const Footer = () => {
  return <FooterWrapper></FooterWrapper>;
};
