import "./App.css";
import {Routes, Route} from 'react-router-dom';
import { HomePage, LandingPage, Archive, Labels, Trash } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/homepage' element={<HomePage />} />
        <Route path="/archive" element={<Archive />} />
        <Route path='/labels' element={<Labels />} />
        <Route path='/trash' element={<Trash />} />
      </Routes>
    </>
  );
}

export default App;
