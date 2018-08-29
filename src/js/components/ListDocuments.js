import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const mapStateToProps = state => {
  return {articles: state.articles};
};

class ConnectedList extends React.Component{
  render(){
    const articles = this.props.articles;
    let listItems;
    if(articles.length === 0){
      listItems = 'There are currently no articles to display';
    }
    else{
      listItems = articles.map((article)=>(
        <li className="list-group-item" key={article.id}>
          <Link to={`/documents/${article.id}`}>{article.title}</Link>
        </li>
      ));
    }
    return (
      <div>
        <br /><br />
        <div className="container text-center">
          {listItems}
        </div>
      </div>
    );
  }
}

const ListDocuments = connect(mapStateToProps)(ConnectedList);
export default ListDocuments;
