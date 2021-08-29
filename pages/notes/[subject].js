import NotesHome from "components/notes/NotesHome"
import { useRouter } from "next/router"

export default function NotesFilter() {
    const router = useRouter()
    const {subject} = router.query
    
    return (
       <NotesHome paramSubject={subject} />
    )
}