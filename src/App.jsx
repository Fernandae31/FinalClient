import React from "react";
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import FiguresList from "./pages/FiguresList";
import MangasList from "./pages/MangasList";
import CreateMangas from './pages/CreateMangas'
import EditProduct from "./pages/EditProduct/EditProduct";



function App() {
  return (
    <div className="App">
   
      <h1 className="Titulo texto-centrado"> </h1>
      <Header/>
      <img src="images/banner.png" alt="logo" style={{width: '100%', height: 'auto'}} />
      <Navbar/>

      
      <Routes>
      
        <Route path="/" element={<HomePage />} />

        <Route
          path="/profile"
          element={
           
              <ProfilePage />
           
          }
        />

        <Route
          path="/signup"
          element={
            
              <SignupPage />
            
          }
        />
        <Route
          path="/login"
          element={
           
              <LoginPage />
            
          }
        />
                <Route
          path="/list/figures/"
          element={

              <FiguresList/>
            
          }
        />
       
        <Route
          path="/list/products"
          element={
          
              <MangasList />
            
          }
          
        />
                <Route
          path="/create-manga"
          element={
            
              <CreateMangas/>
            
          }
          
        />
        <Route
          path="/edit-manga/:type/:id"
          element={
            
              <EditProduct/>
            
          }
          
        />
      </Routes>
      

    </div>
  );
}

export default App;
