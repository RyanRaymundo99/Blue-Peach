import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={ <Home /> } />
      </Routes>
    </div>
  );
}

export default App;