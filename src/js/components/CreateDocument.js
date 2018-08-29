import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addArticle} from '../actions/index';
import {Link} from 'react-router-dom';

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};

class ConnectedForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      description: ''
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event){
    this.setState({title: event.target.value});
  }

  handleDescChange(event){
    this.setState({description: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    const {title} = this.state;
    const id = Date.now();
    const {description} = this.state;
    this.props.addArticle({title, id, description});
    this.setState({title: '', description: ''});
  }

  render(){
    const {title, description} = this.state;
    return (
      <div className="container text-center">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input 
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={this.handleTitleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="descriptionInput">Description</label>
            <textarea 
              className="form-control" 
              id="descriptionInput" 
              rows="3"
              value={description}
              onChange={this.handleDescChange}>
            </textarea>
          </div>
          <button type="submit" className="btn btn-success">
            Create
          </button>
          {' '}
          <Link to="/documents" className="btn btn-secondary">Cancel</Link>
        </form>
      </div>
    );
  }
};

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
