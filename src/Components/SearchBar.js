import React from 'react';
import { useState } from 'react';

export default function SearchBar(props) {
  const [tempVal, setTempVal] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.setSearchQuery(tempVal);
    console.log(props.searchQuery);
  }

  return (
    <div>
      <form action="#">
        <input
          type="text"
          placeholder="search for a user here"
          onChange={(e) => setTempVal(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </form>
    </div>
  );
}
