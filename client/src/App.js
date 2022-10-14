import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Article from './pages/Articles';


function App() {
  return (
    <div className="App">
       {/* <Navbar/> */}
      <Routes>
        <Route  path="/" exact element={<Home/>} />
        <Route  path="/login" exact element={<Login/>} />
        <Route  path="/articles/:id" exact element={<Article/>} />
        {/* <Route  path="/ships" exact element={<Ships/>} /> */}
        {/* <Route  path="/add-staff" exact element={<AddStaff/>} /> */}
        {/* <Route  path="/add-ship" exact element={<AddShip/>} /> */}
        {/* <Route  path="/edit-user/:id" exact element={<EditShips/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
