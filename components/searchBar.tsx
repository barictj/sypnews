//create a const compononent called search bar that has a search input and includes onclick event
import { useState } from 'react';
import styles from '../styles/search.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Router from 'next/router';

export const SearchBar = () => {
    const [searchText, setSearchText] = useState('');
    const search = (e) => {
        console.log(searchText)
        if(searchText === '') return false;
        else{
            Router.push({
                pathname: '/search',
                query: { searchText:  searchText}
            }, '/search');
        }
    };

    return (
    <div className={styles.search_div}>
        <form className={styles.search_form}>
            <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className={styles.search_input}
            >
            
            </input>
            <div className={styles.search_button}>
                <IconButton edge="start" sx={{minHeight: 0, minWidth: 0, padding: 0, paddingTop:1}} onClick={(e) => search(searchText)} type='button'  >
                    <SearchIcon sx={{color:'black', fontSize: 35}} />
                </IconButton>
            </div>
            
            {/* <button type='submit' onClick={search} className={styles.search__button}> */}
                {/* Search */}
            {/* </button> */}
            
        </form>
      </div>  
    );
  };
  
;