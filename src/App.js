import Home from "./Pages/Home/Home";
import Login from './Pages/profile/index'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route exact path='/login' element={ <Login /> } />
      </Routes>
    </div>
  );
}

export default App;