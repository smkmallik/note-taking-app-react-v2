import './SavedNote.css';


const SavedNote = () => {
    return (
        <div>
            <div className="add-saved-note">
                <input
                    className="no-border-note pd-md"
                    type="text"
                    placeholder="Title" 
                />
                <textarea 
                    className="no-border-note pd-md"
                    placeholder="Add Note"
                    type="text"
                />
                <button>Delete</button>
                <button>Archive</button>
                <button>Edit</button>
            </div>
        </div>
    )
}

export { SavedNote }