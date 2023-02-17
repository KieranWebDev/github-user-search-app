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
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();
      console.log(data);
      setUserData(data);
    }
    fetchData();
  }, []);

  return (
    <div className="App-container">
      <NavBar />
      <SearchBar />
      <SearchResults />
    </div>
  );
}

export default App;
