import logo from './logo.svg';
// import './App.css';
import WeatherSummary from './components/WeatherSummary';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from './components/Search';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<WeatherSummary/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </Router>
    </div>
    // <WeatherSummary/>
  );
}

export default App;
