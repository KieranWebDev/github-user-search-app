import React from 'react';
import { useEffect, useState } from 'react';
// styles
import './App.css';
// components
import NavBar from './Components/NavBar';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResullts/SearchResults';

function App() {
  const [userData, setUserData] = useState();
  const [searchQuery, setSearchQuery] = useState('octocat');
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${searchQuery}`
        );
        const data = await response.json();
        console.log(data);
        setUserData(data);
        if (data.message) {
          setNoResults(true);
        }
      } catch (error) {
        console.error(`${error} you don gun fucked upppp`);
      }
    }
    fetchData();
  }, [searchQuery]);

  return (
    <div className="App-container">
      <NavBar />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchResults userData={userData} noResults={noResults} />
    </div>
  );
}

export default App;
