import React, { Component } from 'react';
import '../styles/form.css'
import axios from 'axios'

class FormularioLogin extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            nickname: "",
            image: ""
        }
}

    cambiar = e => {
        const {id} = e.target
        this.setState({
            [id]:e.target.value
        })
        console.log(this.state)
    }

    LoginUser = e => {
        e.preventDefault();
        axios.post('https://fathomless-ocean-57790.herokuapp.com/create/user', this.state)
        .then(result => {
            console.log(result.data)
        })
        .catch(err => {
            console.log(err)
        })
        e.target.reset()
        alert('Usuario creado')
    }

    render(){
        return(
            <form class="formulario-register" onSubmit={this.LoginUser}>
  <div className="form-group">
    <label for="exampleInputEmail1">Ingresa tu correo</label>
    <input type="text" onChange={this.cambiar} className="form-control" id="name" aria-describedby="emailHelp" placeholder="Ingresa tu correo"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Ingresa tu contraseña</label>
    <input type="text" onChange={this.cambiar} className="form-control" id="nickname" placeholder="Ingresa tu contraseña"/>
  </div>
  <div  className="centrar-boton">
  <button type="submit" className="btn btn-success">Entra</button>
  </div>
</form>
        )
    }
}

export default FormularioLogin