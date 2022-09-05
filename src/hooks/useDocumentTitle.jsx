import { useEffect } from 'react'

/**
 * custom hook to change document title
 *
 * @param "string"- heading for the title
 * @returns none
 *
 */

const useDocumentTitle = (documentTitle) => {
  useEffect(() => {
    document.title = `NoteApp | ${documentTitle}`
  }, [documentTitle])
}

export { useDocumentTitle }
