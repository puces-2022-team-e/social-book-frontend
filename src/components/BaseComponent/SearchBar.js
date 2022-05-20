import React from 'react'
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
    return (
        <div className='search-bar'>
            <TextField
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}>Busca</TextField>
        </div>
    )
}

export default SearchBar