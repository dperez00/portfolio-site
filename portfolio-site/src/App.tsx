import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import HeroSectionText from "./components/HeroSectionText";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "side main"`, // lg is wider than 1024px
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="side">
        <HeroSectionText />
      </GridItem>
      <Show above="lg">
        <GridItem area="main">
          <HeroSection />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
