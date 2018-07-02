import React, { Component } from 'react';

class NavBar extends Component {
  constructor(){
    super();
    this.state = {value: ""}
  }
  handleChange(e){
    this.setState({value: e.target.value})
  }
  render(){
    return(
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"><img src="../img/laptop.svg" /> <i className="glyphicon glyphicon-align-center"></i> </button>
            <a href="../../public/index.html" className="navbar-brand">
              ZombieMath
            </a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="active">
                <a href="#"> Page 1 </a>
              </li>
              <li>
                <a href="#"> Page 2 </a>
              </li>
              <li>
                <a href="#"> Page 3 </a>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown
                  <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li><a href="#">Separated link</a></li>
                      <li><a href="#">One more separated link</a></li>
                  </ul>
              </li>
            </ul>

            <form action="#" className="navbar-form navbar-right">
              <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search" onChange={this.handleChange.bind(this)} />
              </div>
              <button type="submit" autoFocus className="btn btn-default">Submit</button>
          </form>
          <button type="button" className="btn btn-default navbar-btn navbar-right">Sign in</button>
          <p className="navbar-text">Signed in as {this.props.currentPlayer}</p>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavBar
