import React from 'react';

import './SearchResults.css';
export default function SearchResults({ userData, noResults }) {
  // const joinedDate = new Date(userData.created_at);
  return (
    <div>
      {noResults && <h1>No Results braaaa</h1>}

      <h1>{userData.name}</h1>
      <img src={userData.avatar_url} alt="avator pic" />
    </div>
  );
}
