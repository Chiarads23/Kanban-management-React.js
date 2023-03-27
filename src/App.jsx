import React from 'react';
import styles from './App.module.scss';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Main/>
    </div>
  );
}

export default App;
