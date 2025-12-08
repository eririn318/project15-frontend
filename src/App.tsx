// import { useState } from 'react'
// import './App.css'

import {Routes,Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import Navbar from "./components/Navbar";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

console.log(import.meta.env.VITE_BACKEND_URL)

function App() {
  return (
    <>
      <div className="p-5 bg-zinc-900 h-screen">
        <Navbar />
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/projects" element={<ProjectPage/>}/>
      <Route path="/projects/:projectId" element={<ProjectDetailsPage/>}/>
    </Routes>
      
      </div>
    </>
  );
} 
export default App;


