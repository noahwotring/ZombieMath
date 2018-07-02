import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Popup.css'
import Scoreboard from './Scoreboard'



class Popup extends Component {
  constructor(props){
    super(props);
    this.state = {
      score: this.props.score,
      player: this.props.player,
      playerAndScore: this.props.allScores
    }
  }

  render() {
    return (
        <div className="popup">
        <div className="popup_inner">
          <h1 className="theScore"> {this.props.player}: {this.props.score}</h1>
          <Scoreboard allScores={this.state.playerAndScore} />
          <button onClick={this.props.togglePopup}> submit </button>
        </div>
        </div>

    );
  }

}
Popup.defaultProp = {
  score: 0,
  player: 'none'
}

export default Popup;
