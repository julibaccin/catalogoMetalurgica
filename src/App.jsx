import { useState } from "react";
import "./App.css";
import { Detail } from "./components/Detail";
import { List } from "./components/List";

function App() {
  const [productSelected, setProductSelected] = useState(null);

  return (
    <div className="App container">
      <h1 className="p-5 mb-4 text-danger border-bottom border-danger">Catálogo de Metalúrgica Baccin</h1>
      {productSelected && <Detail o={setProductSelected} p={productSelected} />}
      {!productSelected && <List o={setProductSelected} />}
    </div>
  );
}

export default App;
