import "./App.css";
import { Grid, GridItem,Show,useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const showNav = useBreakpointValue({ base: false, lg: true });
  const [selectedGenre, setSelectedGenre] = useState<Genre|null>(null)
  return <Grid templateAreas={{
    base:`"nav" "main"`,
    lg:`"nav nav" "aside main"`,
  }}
  templateColumns={{
    base: "1fr",
    lg: "250px 1fr",
  }}
  >
    <GridItem area="nav">
      <NavBar></NavBar>

    </GridItem>
    <Show when={showNav}>
    <GridItem area="aside" paddingX={2}>
      <GenreList selectedGenre ={selectedGenre} onSelectGenre={(genre)=>{setSelectedGenre(genre)}}/>
    </GridItem>
    </Show>
    <GridItem area="main">
      <GameGrid selectedGenre={selectedGenre}></GameGrid>
    </GridItem>
  </Grid>;
}

export default App;
