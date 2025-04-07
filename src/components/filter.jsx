import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const FilterPage = (props) => {
    const{handleFilterChange,roleFilter}=props
  return (
    <div>

        <FormControl style={{mt:"10px"}} className='filter-div'>
            <InputLabel >filter by</InputLabel>
            <Select value={roleFilter} onChange={handleFilterChange}>
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="user">User</MenuItem>
            </Select>
        </FormControl>
    </div>
  )
}

export default FilterPage