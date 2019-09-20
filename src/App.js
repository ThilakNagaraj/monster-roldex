import React from 'react';
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {CardLists} from './Components/Card-List/CardList.Component'
import { loadPartialConfig } from '@babel/core';
import {SearchBox} from './Components/Search-box/Search-box.component'



class App extends Component {

  state = {
    monsters :   [ ] ,
    searchFeild: ''
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }

  handlechange = (e) => {
    this.setState({searchFeild:e.target.value}  ) 
  }

  render () {

    const {monsters, searchFeild} =  this.state; // const monsters = this.state.monsters; // const searchFeild = this.state.searchFeild;
    const filteredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchFeild.toLowerCase())
      )

      return (
      <div className="App">
        <h1>Monster Roldex</h1>
        
          <SearchBox 
          placeholder="Search Monster"
          handlechange={this.handlechange }
          />
        <CardLists monsters = {filteredMonster}/>
      </div>
    );
      }
}

export default App;
