import { DeleteIcon, UndoIcon } from "../../asset/svg/allsvg";
import { useDeleteNote, useNote } from "../../context";
import './TrashNote.css'

const TrashNote = ({ deletedNotes }) => {
    
    const { title, priority, tags, mainContent, _id} = deletedNotes;
    const { addNotes } = useNote();
    const { setDeletedNotes } = useDeleteNote();

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
            className='note-btn tooltip'
            onClick={() => {
              addNotes(deletedNotes)
              deleteNoteFromTrash(_id)
            }}
          >
            <UndoIcon />
            <span className="tooltiptext">Undo</span>
          </button>
          <button className='note-btn tooltip' onClick={() => deleteNoteFromTrash(_id)}>
            <DeleteIcon />
            <span className="tooltiptext">Delete note</span>
          </button>
        </div>
      </div>
    )
}

export { TrashNote }