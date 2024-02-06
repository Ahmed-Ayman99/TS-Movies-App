import Box from "./components/Box";
import Main from "./components/Main";
import Footer from "./components/Footer";
import NavLink from "./components/NavLink";
import MoviesList from "./components/MoviesList";
import StarRating from "./components/StarRating";
import ToasterItem from "./components/ToasterItem";
import MoviesStats from "./components/MoviesStats";
import SelectedMovie from "./components/SelectedMovie";

import { useMovie } from "./contexts/MovieContext";

const App = () => {
  const { selectedId } = useMovie();

  return (
    <>
      <NavLink />
      <Main>
        <Box>
          <MoviesList />
        </Box>

        <Box>
          {selectedId && (
            <SelectedMovie>
              <StarRating />
            </SelectedMovie>
          )}

          {!selectedId && <MoviesStats />}
        </Box>
      </Main>
      <Footer />
      <ToasterItem />
    </>
  );
};

export default App;
