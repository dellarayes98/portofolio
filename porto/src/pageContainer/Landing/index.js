import React from "react";
import { styled } from "@mui/material/styles";
import ArrowSliding from "../../components/ArrowSliding";
import { useNavigate } from "react-router-dom";

const Container = styled("div")(() => ({
  width: "100vw",
  overflow: "auto",
  display: "grid",
  gridTemplateAreas: `"cover cover"
    "header header"`,
  gridTemplateRows: "1fr 0.1fr",
}));

const Cover = styled("div")(() => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#A25B5B",
  gridArea: "cover",
  animation: "bounce 2s ease 2",
  "@keyframes bounce": {
    "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
    "40%": { transform: "translateY(-30px)" },
    "60%": { transform: "translateY(-15px)" },
  },
}));

const Border = styled("div")(() => ({
  padding: "5px",
  background:
    "linear-gradient(110deg, #809A6F, 33%,rgba(0, 0, 0, 0) 33%), linear-gradient(110deg, #D5D8B5 34%, #E6D2AA 34%)",
  backgroundSize: "400% 400%",
  height: "600px",
  width: "600px",
  backgroundPosition: "25% 50%",
  WebkitAnimation: " Gradient 15s ease infinite",
  MozAnimation: "Gradient 5s ease infinite",
}));

const Inner = styled("div")(() => ({
  padding: "40px 0",
  display: "block",
  // backgroundColor: "#ff6f69",
  margin: "2%",
  paddingBottom: "40px",
  height: "500px",
  width: "570px",
  background: "#632626",
  backgroundSize: "300%",
  backgroundPosition: "50% 50%",
}));

const Knockout = styled("div")(() => ({
  verticalAlign: "middle",
  textAlign: "center",
  fontFamily: "Pacifico",
  fontSize: "50pt",
  background:
    "linear-gradient(110deg, #809A6F 33%, rgba(0, 0, 0, 0) 33%), linear-gradient(110deg, #E6D2AA 34%, #E6D2AA 34%)",
  backgroundSize: "400%",
  WebkitTextFillColor: "transparent",
  WebkitBackgroundClip: "text",
  animation: "Gradient 5s ease infinite",
  WebkitAnimation: "Gradient 5s ease infinite",
  MozAnimation: "Gradient 5s ease infinite",
  "@keyframes Gradient": {
    "0%": {
      backgroundPosition: "30% 50%",
    },
    "50%": {
      backgroundPosition: " 25% 50%",
    },
    "100%": {
      backgroundPosition: "30% 50%",
    },
  },
}));

const Header = styled("div")(() => ({
  //   width: "100%",
  backgroundColor: "#C37B89",
  // height: "80px",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  padding: "16px",
  position: "relative",
  zIndex: 1,
  gridArea: "header",
  // position: "sticky",
  // top: 0,
}));

const HeaderLeft = styled("div")(() => ({
  backgroundColor: "f6a6b2",
  height: "fit-content",
  cursor: "pointer",
  h1: {
    margin: 0,
    backgroundImage:
      "linear-gradient(-225deg, #f6a6b2 0%, #f7c297 29%, #ffecb8 67%, #b7ded2 100%)",
    backgroundSize: "auto auto",
    backgroundClip: "border-box",
    backgroundSize: "200% auto",
    color: "#fff",
    backgroundClip: "text",
    textFillColor: "transparent",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
    animation: "textclip 2s linear infinite",
    display: "inline-block",
    fontSize: "50px",
    fontFamily: "Permanent Marker",
    "@keyframes textclip": {
      to: {
        backgroundPosition: "200% center",
      },
    },
  },
}));

const ButtonNav = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  ul: {
    paddingLeft: 0,
    width: "500px",
    display: "flex",
    justifyContent: "space-between",
    li: {
      "&:hover": {
        backgroundColor: "rgba(209, 232, 228, 0.5)",
        borderRadius: "5px",
        color: "#632626",
        fontWeight: "bold",
      },
      listStyle: "none",
      width: "100%",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
  },
}));

export const Landing = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Cover>
        <Border>
          <Inner>
            <Knockout className="transparant">
              Stories about <br /> Books <br /> & <br /> Codes
            </Knockout>
          </Inner>
        </Border>
        <ArrowSliding></ArrowSliding>
      </Cover>
      <Header>
        <HeaderLeft>
          <h1 onClick={() => navigate("/")}>DELLA</h1>
        </HeaderLeft>
        <ButtonNav>
          <ul>
            <li onClick={() => navigate("/books")}>BOOKS</li>
            <li onClick={() => navigate("/stories")}>STORIES</li>
            <li onClick={() => navigate("/opinions")}>OPINIONS</li>
            <li onClick={() => navigate("/codes")}>CODES</li>
            <li onClick={() => navigate("/others")}>OTHERS</li>
          </ul>
        </ButtonNav>
      </Header>
    </Container>
  );
};
