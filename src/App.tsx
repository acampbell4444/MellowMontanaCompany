import { BrowserRouter, Route, Routes } from "react-router-dom";
import GearPage from "./GearPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GearPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
