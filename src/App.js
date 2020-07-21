import React, { createContext,useState ,useReducer} from 'react';
//import logo from './logo.svg';
import './App.css';
//import Home from '../Komponen/Fungsional/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import Produk from '../Komponen/Class/produk';
import HomePage from './Komponen/Fungsional/HomePage';
import NavbarKomp from './Komponen/Fungsional/NavbarKomp'
import AboutComp from './Komponen/Fungsional/AboutComp';
import Contact from './Komponen/Fungsional/Contact';

import DetailProduct from './Komponen/Fungsional/DetailProduct'
import { CartContext } from './CartContex';


export const keranjangContext= createContext()

//untuk deklarasi fungsi jumlah dan tambah
const initialState = {
  jumlah: 1,
  hargasatuan: 1000,
  hargatotal: 0,
  stock: 35

}

const reducer = (state, action) => {



  switch (action.type) {
      case 'tambah': return {
          ...state,
          jumlah: state.jumlah + 1,
          hargatotal: state.hargasatuan + (state.hargasatuan * state.jumlah)
      }
      case 'kurangi': return {
          ...state,
          jumlah: state.jumlah - 1,
          hargatotal: (state.hargasatuan * state.jumlah) - state.hargasatuan
      }
      default:
          return state

  }
}


const App = () => {

  const[value,setValue] = useState(0)
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
    <BrowserRouter>
      <CartContext.Provider value={{value, setValue}}>
        <NavbarKomp/>
        <keranjangContext.Provider value={{keranjangState: count,keranjangdispatch:dispatch}}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Product" component={DetailProduct} />
          <Route exact path="/about" component={AboutComp}/>
          <Route exact path="/Contact" component={Contact}/>
          

          {/* <Route exact path="/detail/:id" component={DetailComp}/> */}
          </Switch>
        </keranjangContext.Provider>
      </CartContext.Provider>
    </BrowserRouter>
      
     
    </div>
  );
}

export default App;
