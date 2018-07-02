import React, { Component } from 'react';
import Popup from './Popup.js';
import '../css/Main.css';
import Scoreboard from './Scoreboard.js'
import 'bootstrap/dist/css/bootstrap.css'
class Main extends Component {
  constructor(){
    super();
    this.state = {
      score: 0,
      restMode: true,
      showPopup: false,
      num1: 0,
      num2: 0,
      answer: "",
      highscore: 0,
      allScores: [],
      currentPlayer: 'unknown',
      zombieHits: 5,
    }
  }


 
  handleKeyDown(e){
    console.log(e.key)
    if (e.key == "Enter"){
      this.answerQuestion()
      console.log('question answered')
    }
  }
  handleAnswerChange(e){
    this.setState({answer: e.target.value})
  }

  startGame(){
    console.log('start!' + this.state.currentPlayer)
    this.setState({
      restMode: false,
      num1: Math.floor(Math.random() * 100),
      num2: Math.floor(Math.random() * 100),
    })
    var sum = this.state.num1 + this.state.num2
   
    
  }

  endGame(){
      this.setState({
        score: 0,
        restMode: true,
        zombieHits: 5
      })
    }

  togglePopupOn(){
    console.log(this.state.allScores.sort()[0])
    let addedScores = this.state.allScores;
    let currentScore = this.state.score;
    let currentPlayer = this.state.currentPlayer

    var Obj = {[currentPlayer]: currentScore}

    addedScores.push(Obj)
    console.log(addedScores)

    this.setState({
      allScores: [...addedScores]
    })

    this.setState({
      showPopup: !this.state.showPopup
    })
  }

  togglePopupOff(){
    this.setState({
      showPopup: !this.state.showPopup,
      zombieHits: 5
    })
    if (this.state.score > this.state.highscore){
      this.setState({
        highscore: this.state.score,
        score: 0,
        restMode: true,
      })
    } else {
      this.setState({
        score: 0,
        restMode: true
      })
    }
    this.setState({
      answer: "",
      zombieHits: 5,
    })
  }
  
  newQuestionState(){
    this.setState({
      num1: Math.floor(Math.random() * 100),
      num2: Math.floor(Math.random() * 100),
      answer: ""
    })
    var timeLeft = 5;
    console.log("zombie hits" + (this.state.zombieHits - 1))
    setInterval(function(){
      timeLeft -= 1

      if (timeLeft <= 0){
        console.log(timeLeft)
        this.answerQuestion
      }
        
       
      
    },1000)
}

  answerQuestion(){
   
    
    
    if(this.state.num1 === 0 && this.state.num2 === 0){
      this.newQuestionState()
    }
    document.querySelector('#answer').focus();
    var expectedResponse = this.state.num1 + this.state.num2;
    console.log(expectedResponse, this.state.answer)
    if (expectedResponse === parseInt(this.state.answer)){
      this.setState({score: this.state.score + 1,
                    answer: ""
                  });
      this.newQuestionState();
    } else {
        this.setState({
          zombieHits: this.state.zombieHits - 1
        })
        if (this.state.zombieHits * 20 === 0){
          this.setState({
            zombieHits: 5
          })
          this.togglePopupOn()
        } else {
          this.setState({
            answer: ""
          });
          document.querySelector('.problemBlock').classList.add('hit');
          document.querySelector('.problemBlock').addEventListener('transitionend',this.removeTransition)
          this.newQuestionState()
        }
      }
    }
    removeTransition(e){
      e.target.classList.remove('hit')
    }



  getName(){
    return (
      <div>
      <input type="text" value="thisstuff" id='username' />  <button> submit </button> </div> )
  }

  render() {
    let theStatus, startAnswerButton, theGame, theName, theScorePopUp;
    if(this.state.restMode){
      theStatus = <div className='thestatus'> Get Ready to Play! </div>

      theGame =
        <div className="problemBlock">
        <button className="button btn-block btn-largest" type="button" onClick={this.startGame.bind(this)}> Start Game </button>
        </div>
    } else if (this.state.showPopup){
      console.log('yay')
      theScorePopUp = <Popup allScores={this.state.allScores} player={this.state.currentPlayer} score={this.state.score} togglePopup={this.togglePopupOff.bind(this)} />
    } else {

      theStatus = <div className='thestatus'> Game In Progress + {this.state.zombieHits}  </div>
      startAnswerButton = <button type="button" onClick={this.endGame.bind(this)}> End Game </button>
      theGame =
      <div className="problemBlock">
        <div className="container problemButtonContainer">
          <p id="theProblem"> <span> {this.state.num1} + {this.state.num2} = <input autoFocus onKeyDown={e => this.handleKeyDown(e)} type="integer" id="answer" size="50" value={this.state.answer} onChange={this.handleAnswerChange.bind(this)} /> </span>
          </p>
          <button id="answerButton" onClick={this.answerQuestion.bind(this)} > Answer </button>
        </div>
      </div>
    }

    return (

        <div>

        <h1 className="container mainheader"> Welcome to Zombie Math     </h1> <span className="health"> Health:{this.state.zombieHits * 20}%</span>
        {this.state.score} {this.state.highscore}
        {theStatus}
        <Scoreboard allScores={this.state.allScores}/>
        {theScorePopUp}
        {startAnswerButton}
        {theGame}
        </div>

    );
  }
}

export default Main;
