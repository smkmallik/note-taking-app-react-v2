import { useState } from "react";
import { Filter } from "../../asset/svg/allsvg";
import { AddNote, Footer, Modal, Navbar, SavedNote, Sidebar } from "../../component";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useFilterHook } from "../../hooks/useFilterHooks";
import "./HomePage.css";

const HomePage = () => {
  const filterByDate = useFilterHook();
  const [modal, setModal] = useState(false);
  useDocumentTitle("HomePage");
  return (
    <>
      <div className='home-page grid-container'>
        <Navbar />
        <Sidebar />

        <div className="filter-icon filter-icon-mediaquery">
          <button onClick={() => setModal(true)}>
            <Filter />
          </button>
        </div>

        <div className='main-content main-display'>
          <AddNote />
          <div className="inner-container">
            <div className="note-list">
              {filterByDate.map((note) => {
                return <SavedNote 
                          key={note._id}
                          note={note}
                        />
              })}
            </div>
          </div>
        </div>
        <div className="footer footer-mediaquery">
          <Footer />
        </div>
      </div>
      <Modal modal={modal} setModal={setModal}  />
    </>
  );
};
export { HomePage };
