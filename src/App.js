import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter ,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home'
import Product from './components/Product'
import ProductDetail from "./components/productdetail";
import ProdcutNotFound from "./components/productnotfound";
import ProductIndex from './components/productIndex';
function App() {
  return (
       <BrowserRouter>
       <Header/>
        <Routes>
      <Route path="/" element={<Home/>} >  </Route>
      <Route path="product" element={<Product/>} >  
      <Route  path="/" element={<ProductIndex/>} ></Route>
      <Route  path=":productId" element={<ProductDetail/>} ></Route>

     </Route>
<Route path="*" element={<ProdcutNotFound/>} ></Route>

       </Routes>
       </BrowserRouter>
  );
}

export default App;

// const shoes = {
//   "air-jordan-3-valor-blue": {
//     name: "VALOUR BLUE",
//     img:
//       "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
//   },
//   "jordan-mars-270-london": {
//     name: "JORDAN MARS 270 LONDON",
//     img:
//       "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
//   },
//   "air-jordan-1-zoom-racer-blue": {
//     name: "RACER BLUE",
//     img:
//       "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
//   }
// };