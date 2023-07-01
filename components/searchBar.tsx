//create a const compononent called search bar that has a search input and includes onclick event
import { useState } from 'react';
import styles from '../styles/search.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Router from 'next/router';

export const SearchBar = (props) => {
    const [searchText, setSearchText] = useState('');

    //form submit function that pushes to search page with searchText
    const search = (e) => {
        e.preventDefault();
        if(searchText === '') return false;
        else{
            if(typeof props.setToggle==='function'){
            props.setToggle(false)
        }

        //push to search page with searchText, need to add page number
            Router.push({
                pathname: '/search',
                query: { searchText:  searchText, pageNumber: 1}
            });
        }
    };


    return (
    <div className={styles.search_div}>
        <form className={styles.search_form} onSubmit={search}>
            <input
            placeholder="Search SYPolitics..."
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className={styles.search_input}
            >
            </input>
            <div className={styles.search_button}>
                <IconButton edge="start" sx={{minHeight: 0, minWidth: 0, padding: 0, paddingTop:1}}  type='submit' >
                    <SearchIcon sx={{color:'rgb(111, 121, 175)', fontSize: 35}} />
                </IconButton>
            </div>
        </form>
      </div>  
    );};