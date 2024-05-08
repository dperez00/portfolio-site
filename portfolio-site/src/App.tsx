import { Grid, GridItem } from "@chakra-ui/react";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main main"`, // lg is wider than 1024px
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <Banner />
        <AboutMe />
        <Skills />
        <Projects />
      </GridItem>
    </Grid>
  );
}

export default App;
