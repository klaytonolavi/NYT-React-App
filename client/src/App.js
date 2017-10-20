import React, { Component } from 'react';
import Nav from "./components/Nav";
import SearchContainer from "./components/Search/Search";

import SavedContainer from "./components/Saved/Saved";

const App = () => (
  <div>
      <Nav/>
      <SearchContainer/>
      <SavedContainer/>
  </div>
);

export default App;
