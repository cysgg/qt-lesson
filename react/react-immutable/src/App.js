import React from 'react';
import immutable from 'immutable';
import './App.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import ColorRedWrapper from './ReadColor'

let obj = { 
  a: 1, 
  b: {
    c: 2
  },
  d: {
    e: 3
  } 
}
let imObj = immutable.fromJS(obj)

class App extends React.Component {
  state = {
    store: imObj
  }
  handleSet = () => {
    let store = this.state.store.setIn(['d', 'e'], '456')
    this.setState({
      store
    })
  }
  render () {
    const { store } = this.state
    return (
      <div>
        <ColorRedWrapper>
          <p>1223</p>
          <div>456</div>
        </ColorRedWrapper>
        <button onClick={this.handleSet}>set d</button>
        <Header value={store.get('a')}/>
        <Main value={store.get('b')}/>
        <Footer value={store.get('d')}/>
      </div>
    )
  }
}

export default App;
