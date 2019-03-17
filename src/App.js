import React, { Component } from 'react';
import './App.css';
import List from './List/List'

class App extends Component {

  state = {
    things:[
      {id:1,text:'First thing on my list'},
      {id:2,text:'Second thing on my list'}
    ],
    newText: ''
  }

  textChange = (event) => {
    let textUpdate = event.target.value
    this.setState({newText:textUpdate})
  }

  deleteText = (index) => {
    // copy array before manipulating to prevent undesired behavior
    // always update state in an immutable fashion
    // const persons = this.state.persons.slice();
    const updatedThings = [...this.state.things]
    updatedThings.splice(index, 1)
    this.setState({things:updatedThings})
  }

  addEntry = () => {
    // creating new array so i dont mutate state array
    let newId
    let oldList = [...this.state.things];
    if(this.state.newText === '' || this.state.newText === null){
      console.log('must have text in input box')
    }else{
      if(oldList.length < 1){
        newId = 1
      }else{
        newId = oldList[oldList.length-1].id + 1;
      }
      let textUpdate = this.state.newText;
      const newEntry = {id:newId,text:textUpdate}
      oldList.push(newEntry)
      this.setState({things:oldList,newText:' '})
    }
  }

  render() {

    let listContent = this.state.things.map((e,i)=> {
      return <List text={e.text} key={e.id} click={(i)=>this.deleteText(i)}></List>
    })
    return (
      <div className="App">
      <h1> List App</h1>
      <p>Welcome to the list app where you can add a bunch of things you want to do</p>
      {listContent}
      <input onChange={this.textChange} value={this.state.newText} type='text'/>
      <button onClick={this.addEntry}>Add Entry</button>
      </div>
    );
  }
}

export default App;
