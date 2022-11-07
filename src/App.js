import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Compo/Home/Home';
import User from './Compo/User/User';
import Edit from './Compo/Edit/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/user/add' element={<User></User>}></Route>
        <Route path='/update/:id' element={<Edit></Edit>}></Route>
      </Routes>
    </div>
  );
}

export default App;
