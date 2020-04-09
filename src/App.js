import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ResultViewer from './components/ResultViewer';
import loadEmployees from './API/loadEmployees';

const App = () => {

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <div className='App-header'>
      <Header />
      <SearchBar />  
      <ResultViewer />    
    </div>

  );
}

export default App;