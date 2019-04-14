import React from 'react';
import GithubCorner from 'react-github-corner';

import './App.css';
import TimeLine from './component/TimeLine';

const App = () => {
  return (
    <section className="App">
      <GithubCorner href="https://github.com/username/repo" />
      <TimeLine />
    </section>
  );
};

export default App;
