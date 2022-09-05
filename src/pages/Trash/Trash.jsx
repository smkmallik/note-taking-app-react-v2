import { Footer, Navbar, Sidebar, TrashNote } from '../../component'
import { useDeleteNote } from '../../context'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import './Trash.css'

const Trash = () => {
  const { deletedNotes } = useDeleteNote()
  useDocumentTitle("TrashPage")
  return (
    <>
      <div className='home-page grid-container'>
        <Navbar />
        <Sidebar />
        <div className='main-content'>
          <h1 className='trash-heading'>Trash</h1>
          <div className='trash-container'>
            {deletedNotes.map((note) => {
              return <TrashNote key={note._id} deletedNotes={note} />
            })}
          </div>
        </div>
        <div className="footer footer-mediaquery">
            <Footer />
        </div>
      </div>
    </>
  )
}
export { Trash }
