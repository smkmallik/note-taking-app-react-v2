import { AddNote, Navbar, SavedNote, Sidebar } from "../../component";
import { useNote } from "../../context/NoteContext";
import "./HomePage.css";

const HomePage = () => {
  const { notes } = useNote();
  return (
    <>
      <div className='home-page grid-container'>
        <Navbar />
        <Sidebar />

        <div className='main-content main-display'>
          <AddNote />
          <div className="inner-container">
            <div className="note-list">
              {notes.map((note) => {
                return <SavedNote 
                          key={note._id}
                          note={note}
                        />
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { HomePage };
