import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import './App.css';
import TimeLine from './component/TimeLine';
import Lotus from './component/Lotus';
import Footer from './component/Footer';

const App = () => {
  const [tabOpen, setTabOpen] = useState(0);

  function onTabClick(event, newValue) {
    setTabOpen(newValue);
  }
  return (
    <section className="App-wrapper">
      <AppBar position="static">
        <Tabs
          value={tabOpen}
          onChange={onTabClick}
          variant="scrollable"
          scrollButtons="off"
        >
          <Tab icon={<Lotus />} />
        </Tabs>
      </AppBar>
      <div className="App-content">
        <TimeLine />
      </div>
      <Footer />
    </section>
  );
};

export default App;
