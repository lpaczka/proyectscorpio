import React from 'react'
import '../styles/FormCreatePost.css'

const FormCreatePost = props => (
    <div className="FormCreatePost">
        <div className="p-publicacion">
            <p>Crear publicación</p>
        </div>
        <form className="form-post">
            <img className="img-post" src="https://images.emojiterra.com/google/android-pie/512px/1f4e3.png" alt="img-perfil"/>
            <textarea className="post-body" type="text" placeholder={`   Evita que le pase a alguien más`} name="body"/>
            <input type="hidden" name="id"/>
        <div className="input-submit">
            <hr/>
            <input className="submit-post" type="submit" value="Compartir"/>
        </div>
        </form>
    </div>
)

export default FormCreatePost