import { DeleteIcon, UndoIcon } from '../../asset/svg/allsvg'
import './TrashNote.css'
import { useNote, useDeleteNote } from '../../context'
import { deleteNoteToast, retrieveNoteToast } from '../../utils/toastify'

const TrashNote = ({ deletedNotes }) => {
  const { title, priority, tags, mainContent, _id, date,noteColor } = deletedNotes
  const { addNotes } = useNote()
  const { setDeletedNotes } = useDeleteNote()

  const deleteNotefromTrash = (noteId) => {
    setDeletedNotes((prev) => prev.filter((note) => note._id !== noteId))
  }

  return (
    <div style={{ backgroundColor: noteColor}} className='add-saved-note'>
      <div className='note-title'>
        {title}
        <div className='tag-chips'># {tags}</div>
      </div>
      <div className='note-text'>{mainContent}</div>
      <div className='date-priority'>
        <div>{date}</div>
        <div className='priority-chips'>{priority}</div>
      </div>
      <div className='button-display'>
        <button
          className='note-btn tooltip'
          onClick={() => {
            addNotes(deletedNotes)
            deleteNotefromTrash(_id)
            retrieveNoteToast("Note moved back to home");
          }}
        >
          <UndoIcon />
          <span className='tooltiptext'>Undo</span>
        </button>
        <button
          className='note-btn tooltip'
          onClick={() => {
            deleteNotefromTrash(_id)
            deleteNoteToast("Permanently deleted note");
          }}
        >
          <DeleteIcon />
          <span className='tooltiptext'>Delete note</span>
        </button>
      </div>
    </div>
  )
}
export { TrashNote }
