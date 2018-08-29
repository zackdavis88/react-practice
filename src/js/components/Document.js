import React from 'react';
import {connect} from 'react-redux';
import {delArticle} from '../actions/index';
import {Link, Redirect} from 'react-router-dom';

const mapStateToProps = state => {
  return {articles: state.articles};
};

const mapDispatchToProps = dispatch => {
  return {
    delArticle: article => dispatch(delArticle(article))
  };
};

class ConnectedDocument extends React.Component{
  constructor(props){
    super(props);
    this.state={
      article: undefined
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event){
    event.preventDefault();
    this.props.delArticle({id: this.props.match.params.id});
  }

  render(){
    let article = this.props.articles.map((article)=>{
      if(article.id === parseInt(this.props.match.params.id))
        return article;
    });
    article = article[0];
    if(article === undefined)
      return (<Redirect to="/documents" push />);
    return (
      <div>
        <br /><br />
        <div className="container text-center">
          <h3>Article Details:</h3>
          <p className="lead">ID: {article.id}</p>
          <p className="lead">Title: {article.title}</p>
          <p className="lead">Description: {article.description}</p>
          <Link className="btn btn-danger" to="/documents" onClick={this.handleDelete}>Delete</Link>{' '}
          <Link className="btn btn-secondary" to="/documents">Cancel</Link>
        </div>
      </div>
    );
  }
}

const Document = connect(mapStateToProps, mapDispatchToProps)(ConnectedDocument);
export default Document;
