import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
   createPost,
   editPost
} from '../Actions/post'
import serializeForm from 'form-serialize'
import AlertContainer from 'react-alert'
import CalendarIcon from 'react-icons/lib/fa/calendar-plus-o'

var randomize = require('randomatic');
const alertOptions = { offset: 14, position: 'top center', theme: 'dark', time: 5000, transition: 'scale'}

class CreateEdit extends Component {
  state = {
    create: true
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    if(this.checkOptions(values))
      this.props.onSubmitForm()
  }
  checkOptions = (values) => {
    if(values.title&&values.body&&values.author&&values.category){
      values.id = randomize('a0', 20);
      values.timestamp = Date.now()
      this.props.createNewPost(values)
      return true
    }
    else{
      this.showAlert()
      return false
    }
  }
  showAlert = () => {
    this.msg.show('empty!!', {
      time: 2000,
      type: 'success',
      icon: <CalendarIcon size={50}/>
    })
  }
  componentDidMount() {
    if(this.props.match.params.id !== "new"){
      this.setState({create: false})
    }
  }
  render() {
    const { create } = this.state
    const { posts, categories } = this.props
    let posts_display = Object.keys(posts).map(index => posts[index])
    let post = {}
    if(!create)
      post = posts_display.filter(post => post.id === this.props.match.params.id)[0]
    let categories_displey = Object.keys(categories).map(index => categories[index])
    return (
      <div className="App">
        <AlertContainer ref={a => this.msg = a} {...alertOptions} />
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type='text' name='title' placeholder='Title' defaultValue={!create&&"baka"}/><br/>
            <input type='text' name='body' placeholder='Body' /><br/>
            <input type='text' name='author' placeholder='Author' /><br/>
            <select name='category' placeholder='Category'>
              {categories_displey.map(category => (
                <option
                  value={category.name}
                  key={category.name}
                >{category.name}</option>
              ))}
            </select><br/>
            <button>{create ? 'Create new Post' : 'Edit this Post'}</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    categories: state.categories
  }
}
function mapDispatchToProps (dispatch) {
  return {
    createNewPost: (values) => dispatch(createPost(values)),
    editAPost: (id, body) => dispatch(editPost(id, body))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEdit)
