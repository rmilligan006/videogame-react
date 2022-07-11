import "./App.css";
import Header from "./components/Header/Header";
import Trending from "./components/Pages/Trending/Trending";
import MainNav from "./components/MainNav";


import Search from "./components/Pages/Search/Search";
import { Container } from "@mui/system";
import { Routes, Route } from "react-router-dom";
import Upcoming from "./components/Pages/Upcoming/Upcoming";
function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} exact></Route>

            <Route path="/upcominggames" element={<Upcoming />}></Route>
            <Route path="/search" element={<Search />}></Route>
          </Routes>
        </Container>
        <MainNav />
      </div>
    </>
  );
}

export default App;
