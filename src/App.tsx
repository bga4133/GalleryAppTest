import React from "react";
import "./App.css";
import { GalleryPanel } from "./components/gallery/GalleryPanel";
import { HeaderApp } from "../src/components/headerApp/HeaderApp";

function App() {
  return (
    <>
      <HeaderApp />
      <GalleryPanel />;
    </>
  );
}

export default App;
