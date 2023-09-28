import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Kontakt from "./Kontakt";
import Onama from "./Onama";

function App() {
  return (
    <>
      <header>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="onama">
              O nama
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="kontakt">
              Kontakt
            </a>
          </li>
        </ul>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="onama" element={<Onama />} />
        <Route path="kontakt" element={<Kontakt />} />
      </Routes>
    </>
  );
}

export default App;
