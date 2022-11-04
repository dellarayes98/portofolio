import React from "react";
import { styled } from "@mui/material/styles";

const Container = styled("div")(() => ({
  width: "100vw",
  minHeight: "900px",
  overflow: "auto",
  display: "grid",
  gridTemplateAreas: `
 
  "aside content"
  "nav content"
  "nav content"
  `,
  gridTemplateColumns: "0.5fr 2fr",
  gridTemplateRows: "2fr 2fr 2fr",
}));

const Content = styled("div")(() => ({
  backgroundColor: "#EAE7C6",
  padding: "50px",
  position: "relative",
  gridArea: "content",
}));

const Aside = styled("div")(() => ({
  gridArea: "aside",
  backgroundColor: "#FCD1D1",
}));

const Nav = styled("div")(() => ({
  gridArea: "nav",
  backgroundColor: "#ECE2E1",
}));

const Home = () => {
  return (
    <Container>
      <Aside></Aside>
      <Nav></Nav>

      <Content>
        {/* <LargerCard></LargerCard>
        <Cards></Cards> */}
      </Content>
    </Container>
  );
};

export default Home;
