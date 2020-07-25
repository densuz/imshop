import React, { createContext, useState, useReducer } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



import HomePage from './Komponen/Fungsional/HomePage';
import NavbarKomp from './Komponen/Fungsional/NavbarKomp'
import AboutComp from './Komponen/Fungsional/AboutComp';
import ContactForm from './Komponen/Fungsional/ContactForm';
import DetailProduct from './Komponen/Fungsional/DetailProduct'
import { CartContext } from './CartContex';
import Login from './Komponen/Fungsional/Login';
import Register from './Komponen/Fungsional/Register';
import ProductComp from './Komponen/Fungsional/ProductComp';
import Tagihan from './Komponen/Fungsional/Tagihan';
import TambahComp from './Komponen/Fungsional/TambahComp';
import EditComp from './Komponen/Fungsional/EditComp';
import ListProduk from './Komponen/Class/ListProduk';
import Dashboard from './Komponen/Fungsional/Dashboard';

//import Dashboard from './Komponen/Fungsional/Dashboard';

export const keranjangContext = createContext()

////inisiasi state
const initialState = {
  jumlah: 0,
  hargasatuan: 1000,
  hargatotal: 0,
  stock: 35

}

const reducer = (state, action) => {
  switch (action.type) {

    // tambah dan kurang 
    case 'tambah':
      return {
        ...state,
        jumlah: state.jumlah + 1,
        hargatotal: state.hargasatuan + (state.hargasatuan * state.jumlah)
      }
    case 'kurangi':
      return {
        ...state,
        jumlah: state.jumlah - 1,
        hargatotal: (state.hargasatuan * state.jumlah) - state.hargasatuan
      }
    default:
      return state
  }
}


function App () {

  const [value, setValue] = useState(0)
  const [count, dispatch] = useReducer(reducer, initialState)
  return (

    <BrowserRouter>
      <CartContext.Provider value={{ value, setValue }}>
        <NavbarKomp />
        <keranjangContext.Provider value={{ keranjangState: count, keranjangdispatch: dispatch }}>
          <Switch>

            <Route exact path="/" component={HomePage} />
            <Route exact path="/Product" component={ProductComp} />
            <Route exact path="/detailproduct" component={DetailProduct} />
            <Route exact path="/about" component={AboutComp} />
            <Route exact path="/Contact" component={ContactForm} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/tagihan" component={Tagihan} />
            <Route exact path="/listbarang" component={ListProduk} />
            <Route exact path="/barang/tambah" component={TambahComp} />
            <Route exact path="/barang/edit" component={EditComp} />
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            
            {/* <Route exact path="/detail/:id" component={DetailComp}/> */}
          </Switch>
        </keranjangContext.Provider>
      </CartContext.Provider>
    </BrowserRouter>


  );
}

export default App;
