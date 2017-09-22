import React, { Component } from 'react';
import serializeForm from 'form-serialize'
import PropTypes from 'prop-types'

class CreateEdit extends Component {
  state = {
    createOrEdit: 'Create New Post'
  }
  static propTypes = {
    onSubmitForm: PropTypes.func.isRequired
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    console.log(values);
    this.props.onSubmitForm()
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type='text' name='title' placeholder='Title' /><br/>
            <input type='text' name='body' placeholder='Body' /><br/>
            <input type='text' name='author' placeholder='Author' /><br/>
            <input type='text' name='category' placeholder='Category' /><br/>
            <button>{ this.state.createOrEdit }</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateEdit
