import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import SummaryList from './components/SummaryList'
import Article from './components/Article.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<SummaryList />} />
          <Route path="/topics/:topic/articles" element={<SummaryList />} />
          <Route path="/articles/:article_id" element={<Article />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;