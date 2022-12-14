import { BrowserRouter, Redirect, Route ,Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Navbar from './component/Navbar';
import TopAnimePage from './pages/TopAnimePage';
import SingleAnimePage from './pages/SingleAnimePage';
import SeasonnalAnimePage from './pages/SeasonalAnimePage';
import AnimeMapPage from './pages/AnimeMapPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SingleStudioPage from './pages/SingleStudioPage';
import SidebarAdmin from './component/SidebarAdmin';
import StudioPage from './pages/StudioPage';
import AdminHomePage from './pages/AdminHomePage';
import ProfilePage from './pages/ProfilePage';
import AccountPage from './pages/AccountPage';
import {useSelector} from "react-redux"
import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { getRole, getUser,logout } from "../src/servies/authorize";
import './App.scss'
function App() {
  const AuthApp=()=>{
    return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/topanime" element={<TopAnimePage/>}/>
        <Route path="/anime/:id" element={<SingleAnimePage/>}/>
        <Route path="/studio/:id" element={<SingleStudioPage/>}/>
        <Route path="/allstudio" element={<StudioPage/>}/>
        <Route path="/allanime" element={<SeasonnalAnimePage/>}/>
        <Route path="/mymap" element={<AnimeMapPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/account" element={<AccountPage/>}/>
    </Routes>
    )
  }
  const UnAuthApp=()=>{
    return(
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/topanime" element={<TopAnimePage/>}/>
          <Route path="/anime/:id" element={<SingleAnimePage/>}/>
          <Route path="/studio/:id" element={<SingleStudioPage/>}/>
          <Route path="/allstudio" element={<StudioPage/>}/>
          <Route path="/allanime" element={<SeasonnalAnimePage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
      )
  }
  //const {user} =useSelector((state)=>state.auth)
  const user= getUser()
  const location = useLocation();
  const [roleUser,setRoleUser]=useState("")
  useEffect(()=>{
    if(user){
      setRoleUser(getRole())
    }
    
  },[user])
  return (
    <>
    {roleUser=="admin"&&user?<SidebarAdmin/>:
     <div>
       {location.pathname=="/login" ||location.pathname=="/register"?<></> :<Navbar/>}
       {!user?<UnAuthApp/>:<AuthApp/>}
    </div>}
    </>
  );
}

export default App;
