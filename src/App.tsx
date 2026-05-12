import "./App.css";
import MyFetch from "./Components/MyFetch";
import MyNavbar from "./Components/MyNavbar";
import Dettaglio from "./Components/Dettaglio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <MyNavbar />
      </header>

      <main>
        <h1 className="text-center text-light mt-4">
          Verso l'infinito e oltre
        </h1>
        <p className="text-center text-light mt-3 fs-4 fw-3">
          Esplora le ultime scoperte del cosmo...
        </p>

        <Routes>
          <Route path="/" element={<MyFetch />} />
          <Route path="/details/:articleId" element={<Dettaglio />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
