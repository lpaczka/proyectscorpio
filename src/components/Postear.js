import React, {Component} from 'react'
import Post from './Post'
import Sesiones from './Sesiones'
import FormCreatePost from './FormCreatePost'
import axios from 'axios'
import '../styles/postear.css'

class Postear extends Component{
    constructor(props){
        super(props)
        this.state = {
            losCards: undefined,
            posts: undefined,
            id: undefined
        }
        this.handleClick = this.handleClick.bind(this);
    }

componentDidMount(){
        axios.get('https://fathomless-ocean-57790.herokuapp.com/get/posts')
        .then((result) => {
            this.setState({
                posts: result.data
            })
        })
        .catch((err) => {
            alert(err)
        });

        axios.get('https://fathomless-ocean-57790.herokuapp.com/get/users')
        .then((result) => {
            this.setState({
                losCards: result.data
            })
        })
        .catch((err) => {
            alert(err)
        });

}
    
renderComment = () => {
        if(this.state.posts === undefined){
            return <h2>Cargando...</h2>
        }else{
            return this.state.posts.map(element => <Post nombre={element.user.name} img={element.user.image} body={element.body}/>)
        }
}

renderCard = () => {
    if(this.state.losCards === undefined){
        return <h2>Cargando...</h2>
    }else{
        return this.state.losCards.map(element => <Sesiones id={element._id} nombre={element.name} img={element.image} onClick={(e) => this.handleClick(element, e)}/>)
    }
}

handleClick = (id,o) => {
   return console.log(id, o)
}

onHandlePost = () => {
    const posters = document.getElementById('postUser')
    const body = posters.value
    let user = this.state.id
    axios.post('https://fathomless-ocean-57790.herokuapp.com/create/post', {
        body,
        user
    })
    .then(response => {
        this.setState({
            newPost: response.status
        })
    })
    .catch(err => {
        alert(err)
    });
    posters.value = ""
 }

    render(){
        return(
            <div className="Postear">
                <div className="Crea-post">
                <FormCreatePost nombre='Luis Fernando'/>
                </div>
                <div className="Comments">
                {this.renderComment()}
                </div>
            </div>
        )
    }
}

export default Postear