import React, { useState } from 'react';
import setFilter from 'react-table'
import { Table } from 'react-bootstrap/Table';
import TableData from '../Table/Table'


const Search = ({handleFilterChange}) => {

    return (
        <div>
          <form>Search by Employee First Name: <input onChange = {handleFilterChange} name="search" type="search"/></form>
        </div>
    )
};

export default Search
