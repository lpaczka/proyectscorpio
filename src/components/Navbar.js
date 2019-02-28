import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import '../styles/navbar.css'

class Navbar extends Component{
  constructor(props){
    super(props)
}
    locate = e => {
      if(e.target.matches('.home')){
        this.props.history.push("/")
      }
      if(e.target.matches('.register')){
        this.props.history.push("/register")
      }
      if(e.target.matches('.login')){
        this.props.history.push("/login")
      }
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light">
  <h2 className="navbar-brand home" onClick={this.locate}>DenunciaLO</h2>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link register" onClick={this.locate}>Registrate<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link login" onClick={this.locate}>Entra<span className="sr-only">(current)</span></a>
      </li>
    </ul>
  </div>
</nav>
        )
    }
}

export default withRouter(Navbar)