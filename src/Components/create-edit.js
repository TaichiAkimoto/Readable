import React, { Component } from 'react';
import serializeForm from 'form-serialize'
import PropTypes from 'prop-types'
import AlertContainer from 'react-alert'
import CalendarIcon from 'react-icons/lib/fa/calendar-plus-o'

class CreateEdit extends Component {
  state = {
    create: true
  }
  static propTypes = {
    onSubmitForm: PropTypes.func.isRequired,
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    if(this.checkOptions(values)){
      this.props.onSubmitForm()
    }
  }
  checkOptions = (values) => {
    if(values.title&&values.body&&values.author&&values.category)
      return true
    else
      this.showAlert()
      return false
  }
  alertOptions = {
    offset: 14,
    position: 'top center',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
  }
  showAlert = () => {
    this.msg.show('empty!!', {
      time: 2000,
      type: 'success',
      icon: <CalendarIcon size={50}/>
    })
  }
  componentDidMount() {
    if(this.props.match.params.id){
      this.setState({create: false})
    }
  }
  render() {
    const { create } = this.state
    return (
      <div className="App">
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type='text' name='title' placeholder='Title' /><br/>
            <input type='text' name='body' placeholder='Body' /><br/>
            <input type='text' name='author' placeholder='Author' /><br/>
            <input type='text' name='category' placeholder='Category' /><br/>
            <button>{create ? 'Create new Post' : 'Edit this Post'}</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateEdit
