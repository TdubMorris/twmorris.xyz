import { Routes } from "react-router";
import { Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import "./styling/index.css"
import { NotFound } from "./pages/NotFound";

function App() {

  return (
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
  )
}

export default App;