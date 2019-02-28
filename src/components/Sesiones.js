import React from 'react';
import '../styles/sesiones.css';

const Sesiones = props => (
    <div id={props.id}>
<div className="Sesion">
        <img id="img-sessions" className="img-session" src={props.img} alt="Card image cap"/>
        <p className="nombre">{props.nombre}</p>
    </div>
    </div>  
)

export default Sesiones
