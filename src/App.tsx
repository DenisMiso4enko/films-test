import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import Movies from "./pages/Movies/Movies";
import Tv from "./pages/Tv/Tv";

function App() {
  return (
    <BrowserRouter>
      <ContentWrapper>
        <Header />
        <div className="App">
          <Routes>
            <Route>
              <Route index element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/tv" element={<Tv />} />
            </Route>
          </Routes>
        </div>
      </ContentWrapper>
    </BrowserRouter>
  );
}

export default App;
