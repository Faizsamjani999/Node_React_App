import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import ArticleForm from './components/ArticleForm';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ArticleForm />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
