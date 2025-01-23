import { Component } from 'react';
import './index.css';

class LettersCalculator extends Component {
  state = {
    count: 0,
    phrase: '',
  };

  onChangePhrase = (event) => {
    this.setState({
      count: event.target.value.length,
      phrase: event.target.value,
    });
  };

  render() {
    const { count, phrase } = this.state;
    return (
      <div className="main-container">
        <div className="text-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="phraseInput">Enter the phrase</label>
          <input
            type="text"
            id="phraseInput"
            placeholder="Enter the phrase"
            value={phrase}
            onChange={this.onChangePhrase}
          />
          <p>No.of letters: {count}</p>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="img"
            alt="letters calculator"
          />
        </div>
      </div>
    );
  }
}

export default LettersCalculator;
