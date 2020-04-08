import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ResultViewer from './components/ResultViewer';

function App() {
  return (
    <div className='App-header'>
      <Header />
      <SearchBar />  
      <ResultViewer />    
    </div>

  );
}

export default App;