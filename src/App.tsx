import React from 'react';
import {Spacer} from "@nextui-org/react";
import NavbarComponent from "./Components/Global/Navbar";
import './App.css';
import GalleryPage from "./Components/EventGallery/GalleryPage";
import Footer from "./Components/Global/Footer";

function App() {
  return (
          <main className="dark text-foreground bg-background" style = {{height:"100vh"}}>
              <div className="App">
                  <NavbarComponent/>
                  <div className="flex justify-center">
                      <Spacer x={4}/>
                      <GalleryPage/>
                      <Spacer x={4}/>
                  </div>
                  <Footer/>
              </div>
          </main>
);
}

export default App;
