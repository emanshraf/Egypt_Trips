import {BrowserRouter as Router , Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Travels from './pages/travels/Travels';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Opinion from './pages/opinion/Opinion';
import MarsaAlam from './pages/marsaAlam/MarsaAlam';
import Hurghada from './pages/hurghada/Hurghada';
import SubCategory from "./pages/subCategory/SubCategory";
import Product from "./pages/product/Product";


import HomeArabic from "./Arabic/pages/home/Home";
import AboutArabic from "./Arabic/pages/about/About";
import TravelsArabic from "./Arabic/pages/travels/Travels";
import HurghadaArabic from "./Arabic/pages/hurghada/Hurghada";
import MarsaAlamArabic from "./Arabic/pages/marsaAlam/MarsaAlam";
import ContactArabic from "./Arabic/pages/contact/Contact";
import OpinionArabic from "./Arabic/pages/opinion/Opinion";
import ProductArabic from './Arabic/pages/product/Product';
import SubCategoryArabic from "./Arabic/pages/subCategory/SubCategory";
import Languge from './components/languge/Languge';

function App() {
  return (
    <div>
      <Languge/>
      <Router>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route  path="/travels" element={<Travels/>}/>
    <Route  path="/about" element={<About/>}/>
    <Route  path="/contact" element={<Contact/>}/>
    <Route  path="/opinion" element={<Opinion/>}/>
    <Route  path="/marsaAlam" element={<MarsaAlam/>}/>
    <Route  path="/hurghada" element={<Hurghada/>}/>
    <Route  path="/subCategory/:category" element={<SubCategory/>}/>
    <Route  path="/product/:id" element={<Product/>}/>  

    <Route exact path="/homeArabic" element={<HomeArabic/>}/> 
    <Route exact path="/aboutArabic" element={<AboutArabic/>}/>
    <Route exact path="/travelsArabic" element={<TravelsArabic/>}/>
    <Route  path="/hurghadaArabic" element={<HurghadaArabic/>}/>
    <Route  path="/marsaAlamArabic" element={<MarsaAlamArabic/>}/>
    <Route  path="/contactArabic" element={<ContactArabic/>}/>
    <Route  path="/opinionArabic" element={<OpinionArabic/>}/>
    <Route  path="/productArabic/:id" element={<ProductArabic/>}/>
    <Route  path="/subCategoryArabic/:category" element={<SubCategoryArabic/>}/>
  </Routes>
 </Router>
    </div>
  );
}

export default App;
