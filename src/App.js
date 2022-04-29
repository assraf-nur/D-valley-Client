import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Components/Products/Products';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/home' element={<Home></Home>}/>
        <Route path='/banner' element={<Banner></Banner>}/>
        <Route path='/products' element={<Products></Products>}/>
      </Routes>
    </div>
  );
}

export default App;