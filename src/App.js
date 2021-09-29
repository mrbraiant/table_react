import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
  
  render() {  
    const data = [
    { id: 1, name: 'Braioso', last: 'Malta'},
    { id: 2, name: 'Brais', last: 'Freitas'},
    { id: 3, name: 'Brian', last: 'Atila'}
    ]
    const head = {
      id: "Numero",
      name: "Nome",
      last: "Sobrenome"
    }
    return (
      <div>
        <Table data={data} head={head} />
      </div>
    );
  }
}

export default App;
