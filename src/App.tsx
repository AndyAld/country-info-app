import React, { useState } from 'react';
import Container from '@mui/material/Container';
import CountryInfo from './components/CountryInfo/CountryInfo';
import SearchBar from './components/SearchBar';
import Header from './components/Header';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };
  return (
    <>
      <Header />
      <Container 
        sx={{ marginY: 4, marginLeft: 0, marginRight: 'auto' }}
        >
        <SearchBar onSearchChange={handleSearchChange} />
        <CountryInfo searchTerm={searchTerm} />
      </Container>
    </>
  );
}

export default App;
