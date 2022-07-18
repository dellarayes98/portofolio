import React from "react";
import { keyframes, styled } from "@mui/material/styles";
import gambar from "../../assets/images/cover.JPG";

const Container = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
}));

const Header = styled("div")(() => ({
  //   width: "100%",
  backgroundColor: "#b7ded2",
  //   height: "80px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px",
  position: "relative",

  zIndex: 1,
}));

const Cover = styled("div")(() => ({
  height: "800px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f6a6b2",
  position: "relative",
}));

const Left = styled("div")(() => ({
  width: "50%",
  textAlign: "start",
}));

const Border = styled("div")(() => ({
  padding: "5px",
  background:
    "linear-gradient(110deg, #ffeead, 33%,rgba(0, 0, 0, 0) 33%), linear-gradient(110deg, #C5E7D7 34%, #88d8b0 34%)",
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
  background: "radial-gradient(#f6a6b2, #ff8b87)",
  backgroundSize: "300%",
  backgroundPosition: "50% 50%",
}));

const Knockout = styled("div")(() => ({
  verticalAlign: "middle",
  textAlign: "center",
  fontFamily: "Pacifico",
  fontSize: "50pt",
  background:
    "linear-gradient(110deg, #ffeead 33%, rgba(0, 0, 0, 0) 33%), linear-gradient(110deg, #C5E7D7 34%, #88d8b0 34%)",
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

const Right = styled("div")(() => ({
  img: {
    height: "400px",
    borderRadius: "10px",
  },
}));

const Content = styled("div")(() => ({
  backgroundColor: "#f7c297",
  // height: "100rem",
}));
const HeaderLeft = styled("div")(() => ({
  h1: {
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
const HeaderRight = styled("div")(() => ({}));

const Home = () => {
  return (
    <Container>
      <Header>
        <HeaderLeft>
          <h1>ABC</h1>
        </HeaderLeft>
        <HeaderRight>
          <h3>About</h3>
        </HeaderRight>
      </Header>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ position: "relative", zIndex: 1 }}
      >
        <path
          fill="#b7ded2"
          fill-opacity="1"
          d="M0,288L16,282.7C32,277,64,267,96,250.7C128,235,160,213,192,213.3C224,213,256,235,288,213.3C320,192,352,128,384,112C416,96,448,128,480,133.3C512,139,544,117,576,128C608,139,640,181,672,181.3C704,181,736,139,768,106.7C800,75,832,53,864,53.3C896,53,928,75,960,96C992,117,1024,139,1056,165.3C1088,192,1120,224,1152,229.3C1184,235,1216,213,1248,208C1280,203,1312,213,1344,234.7C1376,256,1408,288,1424,304L1440,320L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"
        ></path>
      </svg>
      <Cover>
        {/* <Left> */}
        <Border>
          <Inner>
            <Knockout className="transparant">
              A story of <br /> Books <br /> & <br /> Codes
            </Knockout>
          </Inner>
        </Border>
        {/* </Left> */}
        {/* <Right>
          <img src={gambar} alt="gambar" />
        </Right> */}
      </Cover>
      {/* <Content>
        <h1>this is place for cards</h1>
      </Content> */}
    </Container>
  );
};

export default Home;
