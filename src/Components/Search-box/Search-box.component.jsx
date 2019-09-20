import React from 'react';
import './Search-box.style.css'

export const SearchBox =  ({placeholder, handlechange}) => (
    <input 
        className='search'
        type="search" 
        placeholder={placeholder}
        onChange={handlechange}
    />
)

