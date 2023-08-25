import Home from "./Pages/Home";
import DataProvider from "./context/DataProvider";

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
