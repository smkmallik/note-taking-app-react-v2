import { ArchiveProvider, useArchive } from "./ArchiveContext";
import { AuthProvider, useAuth } from "./AuthContext";
import { DeleteProvider, useDeleteNote} from './DeleteContext';
import { NoteProvider, useNote } from "./NoteContext";

export {
    NoteProvider,
    useNote,
    DeleteProvider,
    useDeleteNote,
    useAuth,
    AuthProvider,
    useArchive,
    ArchiveProvider
}

