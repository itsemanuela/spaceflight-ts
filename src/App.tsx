import "./App.css";
import MyFetch from "./Components/MyFetch";
import MyNavbar from "./Components/MyNavbar";

function App() {
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <main>
        <h1 className="text-center text-light mt-4">
          {" "}
          Verso l'infinito e oltre
        </h1>

        <p className="text-center text-light mt-3 fs-4 fw-3">
          {" "}
          Esplora le ultime scoperte del cosmo, i lanci dei razzi e le missioni
          che stanno portando l'umanità tra le stelle.{" "}
        </p>
        <MyFetch />
      </main>
    </>
  );
}

export default App;
