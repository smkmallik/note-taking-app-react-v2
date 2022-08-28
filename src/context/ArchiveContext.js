import { createContext, useContext, useState } from "react"
import { useNote } from "./NoteContext";
import axios from 'axios';

const ArchiveContext = createContext();

const ArchiveProvider = ({children}) => {
    const [archiveNote, setArchiveNote] = useState([]);

    const { setNotes } = useNote();


    const moveToArchive = async(noteId, note) => {
        const encodedToken = localStorage.getItem("token");
        const config = {
            headers: {
                authorization: encodedToken
            }
        }
        try {
            const response = await axios.post(`/api/notes/archives/${noteId}`, { note }, config);
            setNotes(response.data.notes);
            setArchiveNote(response.data.archives);
        } catch (error) {
            console.log(error);
        }
    }

    const restoreArchiveNote = async(noteId) => {
        const encodedToken = localStorage.getItem("token");
        const config = {
            headers: {
                authorization: encodedToken
            }
        };
        try {
            const response = await axios.post(`/api/archives/restore/${noteId}`, {}, config);
            setArchiveNote(response.data.archives);
            setNotes(response.data.notes);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteArchive = async(noteId) => {
        const encodedToken = localStorage.getItem("token");
        const config = { headers: {
            authorization: encodedToken
        }};
        try {
            const response = await axios.delete(`/api/archives/delete/${noteId}`, config);
            setArchiveNote(response.data.archives);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ArchiveContext.Provider
            value={{
                archiveNote,
                setArchiveNote,
                moveToArchive,
                restoreArchiveNote,
                deleteArchive
            }}
        >
            { children }
        </ArchiveContext.Provider>
    )
}

const useArchive = () => useContext(ArchiveContext);

export { ArchiveProvider, useArchive };