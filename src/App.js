import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ResultViewer from './components/ResultViewer';
import loadEmployees from './API/loadEmployees';

const App = () => {

  const [employees, setEmployees] = useState([]);
  const [allEmployees, setAllEmployees] = useState([]); // using just to ensure we always have the same employees rather than reloading

  const matchUserByString = async (text) => {
    let users = allEmployees.filter(item => {
      let userFullName = `${item.name.first} ${item.name.last}`;
      if(userFullName.substr(0, text.length).toLowerCase() === text.toLowerCase()) return item;
      return null;
    })

    setEmployees([...users])
  }

  const sortUsersByName = (isAsc) => {
    let employeesToSort = [...employees];

    (isAsc) ? employeesToSort.sort((a, b) => {
      var nameA = `${a.name.first} ${a.name.last}`.toLowerCase();
      var nameB = `${b.name.first} ${b.name.last}`.toLowerCase();
      return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
    }) : employeesToSort.sort((a, b) => {
      var nameA = `${a.name.first} ${a.name.last}`.toLowerCase();
      var nameB = `${b.name.first} ${b.name.last}`.toLowerCase();
      return (nameA > nameB) ? -1 : (nameA < nameB) ? 1 : 0;
    });

    setEmployees([...employeesToSort]);
  }

  const loadData = async () => {
    let results = await loadEmployees();    
    
    setEmployees([...results.results])
    setAllEmployees([...results.results])
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className='App-header'>
      <Header />  
      <ResultViewer 
        data={employees}
        findByUser={matchUserByString}
        sortUsers={sortUsersByName}
      />
    </div>

  );
}

export default App;