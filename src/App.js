import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ResultViewer from './components/ResultViewer';
import loadEmployees from './API/loadEmployees';

const App = () => {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      let results = await loadEmployees();    
      
      setEmployees([...results.results])
    }
    
    loadData();
  }, []);

  useEffect(() => {
    console.log(employees)
  })

  return (
    <div className='App-header'>
      <Header />  
      <ResultViewer 
        data={employees}
      />
    </div>

  );
}

export default App;