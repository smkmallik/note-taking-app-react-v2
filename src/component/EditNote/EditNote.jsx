import { useState } from 'react';
import ReactDom from 'react-dom';
import { ColorPallete, SaveIcon } from '../../asset/svg/allsvg';
import { useNote } from '../../context'
import { colorsData } from '../Note/ColorData';
import './EditNote.css'


const EditNote = ({setOpenModal, _id}) => {
  const { editNote, setEditNote, updateNote } = useNote()
  const [colorOpen, setColorOpen] = useState(false)

  const colorHandler = (color) => {
    setEditNote({ ...editNote, noteColor: color })
  }

  const saveEditNote = (editNote) => {
    setOpenModal(false)
    updateNote(editNote)
  }

  return ReactDom.createPortal(
    <div className='modal-background'>
      <div className='modal-container'>
        <div className='btn-cross-modal'>
          <button className='btn-cross' onClick={() => setOpenModal(false)}>
            X
          </button>
        </div>
        <div
          style={{ backgroundColor: editNote.noteColor }}
          className='add-edit-note border'
        >
          <div className='input-container input-margin'>
            <label htmlFor='input-title'>
              Title:
              <input
                id='input-title'
                className='border-note sm-pd title-input '
                placeholder='Title'
                type='text'
                value={editNote.title}
                onChange={(e) =>
                  setEditNote((prev) => ({ ...prev, title: e.target.value }))
                }
              />
            </label>
            <label htmlFor='input-tags'>
              Tags:
              <select
                id='input-tags'
                name='tags'
                className='border-note sm-pd tags'
                placeholder='Add Tags'
                value={editNote.tags}
                onChange={(e) =>
                  setEditNote((prev) => ({ ...prev, tags: e.target.value }))
                }
              >
                <option value='none'>None</option>
                <option value='work'>Work</option>
                <option value='health'>Health</option>
                <option value='exercise'>Exercise</option>
                <option value='chores'>Chores</option>
              </select>
            </label>
            <label htmlFor='input-priority'>
              Priority:
              <select
                id='input-priority'
                name='priority'
                className='border-note sm-pd priority'
                placeholder='Add Priority'
                value={editNote.priority}
                onChange={(e) =>
                  setEditNote((prev) => ({
                    ...prev,
                    priority: e.target.value,
                  }))
                }
              >
                <option value='none'>None</option>
                <option value='high'>High</option>
                <option value='medium'>Medium</option>
                <option value='low'>Low</option>
              </select>
            </label>
          </div>
          <textarea
            className='no-border pd-md input-margin'
            placeholder='Add Note...'
            type='text'
            value={editNote.mainContent}
            onChange={(e) =>
              setEditNote((prev) => ({
                ...prev,
                mainContent: e.target.value,
              }))
            }
          />
          <div className='note-footer'>
            <button
              className='color-pallete'
              onClick={() => setColorOpen((open) => !open)}
            >
              <ColorPallete />
            </button>
            {colorOpen && (
              <div className='color-container'>
                <div className='color-container-row'>
                  {colorsData.map((color, index) => (
                    <div
                      key={index}
                      className='color'
                      style={{ backgroundColor: color.color }}
                      onClick={() => colorHandler(color.color)}
                    ></div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <button
            className='no-border save-btn update-btn'
            onClick={() => saveEditNote(editNote)}
          >
            Update
          </button>
          <button
            className='update-icon update-icon-mediaquery no-border'
            onClick={() => saveEditNote(editNote)}
          >
            <SaveIcon />
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export { EditNote }