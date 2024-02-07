import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";

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
        <HeroSection />
      </GridItem>
    </Grid>
  );
}

export default App;
