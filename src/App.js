import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import AllSummaries from './components/AllSummaries.jsx';
import SummariesByTopic from './components/SummariesByTopic.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<AllSummaries />} />
          <Route path="/topics/:topic/articles" element={<SummariesByTopic />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;