import React from 'react';
import { TextField, InputAdornment, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchChange }) => {
  return (
    <Paper
      component="form"
      sx={{
        p: '4px 0',
        display: 'flex',
        alignItems: 'center',
        width: '40%',
        marginTop: 2, 
        marginBottom: 2,
        marginRight: 1,
        boxShadow: 'none',
        borderRadius: '2px',
      }}
    >
      <TextField
        fullWidth
        id="search-country"
        placeholder="Search for a country..."
        onChange={onSearchChange}
        size="small"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          marginLeft: 1,
          flex: 1,
          '.MuiOutlinedInput-root': {
            borderRadius: '4px',
          },
        }}
      />
    </Paper>
  );
};

export default SearchBar;
