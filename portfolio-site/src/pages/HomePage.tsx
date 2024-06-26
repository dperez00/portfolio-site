import { Grid, GridItem } from "@chakra-ui/react";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import BottomLinks from "../components/BottomLinks";
import ContactMe from "../components/ContactMe";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { Element } from "react-scroll";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main main"`, // lg is wider than 1024px
      }}
    >
      <GridItem area="main">
        <Banner />
        <Element name="about">
          <AboutMe />
        </Element>
        <Element name="experience">
          <Skills />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <ContactMe />
        </Element>
        <BottomLinks />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
