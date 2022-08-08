import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import SummaryList from './components/SummaryList.jsx';
import Article from './components/Article.jsx';
import ErrorMessage from './components/ErrorMessage.jsx';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<SummaryList />} />
            <Route path="/topics/:topic/articles" element={<SummaryList />} />
            <Route path="/articles/:article_id" element={<Article />} />
            <Route path="*" element={<ErrorMessage msg={"Bad request"} code={400}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;