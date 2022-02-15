import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home'
import TourDetail from './Components/TourDetail/TourDetail';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/city/:id" element={<TourDetail />} />
      </Routes>
      <Footer/>
    </>
   
  );
}

export default App;
