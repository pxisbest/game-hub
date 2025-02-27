import "./App.css";
import { Grid, GridItem,Show,useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  const showNav = useBreakpointValue({ base: false, lg: true });
  return <Grid templateAreas={{
    base:`"nav" "main"`,
    lg:`"nav nav" "aside main"`,
  }}>
    <GridItem area="nav">
      <NavBar></NavBar>
    </GridItem>
    <Show when={showNav}>
    <GridItem area="aside" bg="gold">Aside</GridItem>
    </Show>
    <GridItem area="main" bg="dodgerblue">Main</GridItem>
  </Grid>;
}

export default App;
