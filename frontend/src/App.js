import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Library from './components/pages/Library';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/library" element={<Library/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
