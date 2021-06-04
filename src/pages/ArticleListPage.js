import React from 'react';
import articleContent from './articles-content'
import ArticlesList from '../components/ArticlesList';

const containerDiv = {
  padding: '25px',
};

const ArticleListPage = () => {

  return (
    <React.Fragment>
      <div style={containerDiv}>
        <h1>Article List</h1>
        <ArticlesList articles={articleContent}/>
      </div>
    </React.Fragment>
  );
};

export default ArticleListPage;
