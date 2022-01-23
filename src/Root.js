import { BrowserRouter, Routes, Route} from "react-router-dom";
import { GlobalStyle } from "./assets/styles/globalStyle";
import { MainPage } from "./components/views/MainPage/MainPage"
import { Map } from "./components/views/Map/Map";

function Root() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="2" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Root;
