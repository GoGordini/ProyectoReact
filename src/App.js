import ItemListContainer from "./components/ItemList/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  let greeting = "BIENVENIDOS A HAPPY SKIN";
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={greeting} />
    </div>
  );
}

export default App;
