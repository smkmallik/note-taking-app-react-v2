import { Navbar, Sidebar } from "../../component";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className='home-page grid-container'>
        <Navbar />
        <Sidebar />

        <div className='main-content'>Main</div>
        <div className='main-footer'>Footer</div>
      </div>
    </>
  );
};
export { HomePage };
