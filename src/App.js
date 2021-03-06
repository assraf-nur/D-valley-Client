import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Components/Products/Products';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Banner from './Components/Banner/Banner';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Inventory from './Components/Inventory/Inventory';
import RequireAuth from './Components/Login/RequireAuth';
import ManageInventories from './Components/ManageInventories/ManageInventories';
import Inventories from './Components/ManageInventories/Inventories';
import AddProducts from './Components/AddIProducts/AddProducts';
import Blogs from './Components/Blogs/Blogs';
import NotFound from './Components/NotFound/NotFound';
import MyProducts from './Components/MyProducts/MyProducts';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/home' element={<Home></Home>}/>
        <Route path='/banner' element={<Banner></Banner>}/>
        <Route path='/products' element={<Products></Products>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/register' element={<Register></Register>}/>
        <Route path='/blogs' element={<Blogs></Blogs>}/>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }/>
        <Route path='/manageInventory' element={<ManageInventories></ManageInventories>}/>
        <Route path='/inventories' element={<Inventories></Inventories>}/>
        <Route path='/addProducts' element={<AddProducts></AddProducts>}/>
        <Route path='*' element={<NotFound></NotFound>}/>
        <Route path='/myProducts' element={
          <RequireAuth>
            <MyProducts></MyProducts>
          </RequireAuth>
        }/>
      </Routes>
    </div>
  );
}

export default App;