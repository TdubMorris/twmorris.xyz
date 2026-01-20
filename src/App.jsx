import { Routes } from "react-router";
import { Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import "./styling/index.css"
import { NotFound } from "./pages/NotFound";
import RandomProject from "./pages/RandomProject";
import { Secret } from "./pages/secret";

function App() {

  return (
      <Routes>
        <Route path="" element={<HomePage/>} />
        <Route path="/random" element={<RandomProject/>}/>
        <Route path="/secret" element={<Secret/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
  )
}

export default App;