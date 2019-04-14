import React from 'react';
import GithubCorner from 'react-github-corner';

import './App.css';
import TimeLine from './component/TimeLine';

const App = () => {
  return (
    <section className="App">
      <GithubCorner href="https://github.com/icrosil/react-d3" />
      <TimeLine />
    </section>
  );
};

export default App;
