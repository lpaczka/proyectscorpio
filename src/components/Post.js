import React, {Component} from 'react'
import '../styles/posts.css'

class Post extends Component{
    render(){
        return(
            <div className="Post">
                <div className="presentacion">
                    <img className="foto-circular" src="https://bpwsaskatoon.com/isl/themes/bpw/img/default-profile.jpg"></img>
                    <h4 className="nombre-post">{this.props.nombre}</h4>
                </div>
                    <div className="body">
                        <p className="parrafo-body">{this.props.body}</p>
                    </div>
            </div>
        )
    }
}

export default Post