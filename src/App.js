import React from 'react';
import DisplaySimpson from './components/DisplaySimpson';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {simpson:''}
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({
          simpson : data[0],
        })
      })
  }

  render() {
    return (
      <div>
        <DisplaySimpson simpson={this.state.simpson} />
        <button type='button' onClick={this.getQuote}>Get quote</button>
      </div>
    );
  }
}
export default App;
