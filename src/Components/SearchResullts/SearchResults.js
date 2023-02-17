import React from 'react';

export default function SearchResults({ userData, noResults }) {
  return (
    <div>
      {noResults && <h1>No Results braaaa</h1>}
      {/* <img src={userData.avater_url} alt="avatar img" /> */}
      <h1>{userData.name}</h1>
    </div>
  );
}
