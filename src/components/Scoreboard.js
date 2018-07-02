import React, { Component } from 'react';
import '../css/Scoreboard.css'
class Scoreboard extends Component {
  constructor(props){
    super(props)
  }


  render() {
    return (

      <table className="sideTable">
      <thead>
        <tr>
          <th> Player </th>
          <th> Score </th>
        </tr>
        </thead>
        <tbody>
        {this.props.allScores.map((eachKey)=>{return <tr>
                                                            <td>{(Object.keys(eachKey)[0])}</td>
                                                            <td>{(Object.values(eachKey)[0])} </td>
                                                          </tr>})}

                                                        </tbody>
      </table>
    );
  }

}

export default Scoreboard;
