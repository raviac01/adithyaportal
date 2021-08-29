import { MdSearch } from 'react-icons/md'
import classes from './notes.module.css'

export default function SearchNotes({handleSearch, SearchNotes}) {

    const searchEvent = (event) => {
        handleSearch(event.target.value)
    }
    
    return (
        <div className={classes.search}>
            <MdSearch className={classes.searchicons} size='1.3em' />
            <input type='text' onChange={searchEvent} value={SearchNotes} placeholder='type to search...' />
        </div>
    )
}