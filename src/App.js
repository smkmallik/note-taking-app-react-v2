import "./App.css";
import {Routes, Route} from 'react-router-dom';
import { HomePage, LandingPage, Archive, Trash, LoginPage } from "./pages";
import Mockman from 'mockman-js'
import { RequireAuth } from "./utils/RequireAuth";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route
          path='/homepage'
          element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          }
        />
        <Route
          path='/archive'
          element={
            <RequireAuth>
              <Archive />
            </RequireAuth>
          }
        />
        <Route
          path='/trash'
          element={
            <RequireAuth>
              <Trash />
            </RequireAuth>
          }
        />
        <Route 
          path="/login"
          element={<LoginPage />}
        />
        <Route path='/mockman' element={<Mockman />} />
      </Routes>
    </>
  )
}

export default App;
