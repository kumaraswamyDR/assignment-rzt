import React, {useState} from 'react'
import styles from './SearchBar.module.css'
import searchIcon from '../../assets/icons/search-icon.svg'

export default function SearchBar({onSearch}) {
    const [queryText,setQueryText] = useState("") ;
    return (
        <div className={styles.searchBarContainer}>
            <input value={queryText} onKeyPress={event => {
                if (event.key === 'Enter') {
                    onSearch(queryText)
                }
            }} onChange={(event)=>setQueryText(event.target.value)} placeholder='Search for images here...' className={styles.searchBarInput}/>
            <div className={styles.searchIconContainer}><img alt='search-icon' onClick={()=> onSearch(queryText)} className={styles.searchIcon} src={searchIcon}/></div>
        </div>
    )
}
