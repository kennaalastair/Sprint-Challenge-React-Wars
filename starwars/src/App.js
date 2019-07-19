import React, { useEffect, useState } from 'react';
import { Header } from "semantic-ui-react";
import axios from "axios";
import './App.css';
import CharactersCard from './components/CharactersCard';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get('https://swapi.co/api/people')
      .then(res => {
        console.log(res.data.results);
        setData(res.data.results);
      })
      .catch(err => {
        console.log('An unexpected error has occured, please try again later', err);
      })

  }, []);

  return (
    <div className="App">
      <Header as="h1">React Wars</Header>
      <Header as="h3">Characters List</Header>
      {data.map((value, key) => {return <CharactersCard key={key} value={value} />;})}
    </div>
  );
}

export default App;
