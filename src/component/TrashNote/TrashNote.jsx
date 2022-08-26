import { ArchiveIcon, DeleteIcon, UndoIcon } from "../../asset/svg/allsvg";
import { useNote } from "../../context/NoteContext";
import '../SavedNote/SavedNote.css';

const TrashNote = ({ deletedNotes }) => {
    
    const { title, priority, tags, mainContent, _id} = deletedNotes;
    const { addNotes, setDeletedNotes } = useNote();

    const deleteNoteFromTrash = (noteId) => {
        setDeletedNotes((prev) => prev.filter((note) => note._id !== noteId));
    }
    
    return (
      <div className='add-saved-note'>
        <div className='note-title'>
          {title}
          <div className='tag-chips'># {tags}</div>
        </div>
        <div className='note-text'>{mainContent}</div>
        <div className='date-priority'>
          <div>17/04/2022</div>
          <div className='priority-chips'>{priority}</div>
        </div>
        <div className="button-display">
          <button
            className='note-btn'
            onClick={() => {
              addNotes(deletedNotes)
              deleteNoteFromTrash(_id)
            }}
          >
            <UndoIcon />
          </button>
          <button className='note-btn' onClick={() => deleteNoteFromTrash(_id)}>
            <DeleteIcon />
          </button>
          <button className='note-btn'>
            <ArchiveIcon />
          </button>
        </div>
      </div>
    )
}

export { TrashNote }