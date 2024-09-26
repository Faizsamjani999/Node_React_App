import './App.css';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom"
// import CreateArticles from './components/CreateArticles';
// import ArticleList from './components/ArticleList';
// import SingleArticle from './components/SingleArticle';
import ArticleApp from './components/ArticleApp';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<CreateArticles/>}></Route>
        <Route path='/articles' element={<ArticleList/>}></Route>
        <Route path='/singleArticle/:id' element={<SingleArticle/>}></Route> */}
        <Route path='/' element={<ArticleApp/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
