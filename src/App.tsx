import { useState } from "react";
import "./App.css";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Layout from "./components/Layout/Layout";
import RafflePage from "./components/RafflePage/RafflePage";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Layout>
          <RafflePage />
        </Layout>
      </div>
    </DndProvider>
  );
}

export default App;
