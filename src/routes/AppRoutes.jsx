import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Service from '../pages/Service';
import Team from '../pages/Team';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Blog from '../pages/Blog';
import Dashboard from '../admin/Dashboard';
import WebLayout from '../layouts/webLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import AddUser from '../admin/pages/AddUser';
import Edituser from '../admin/pages/Edituser';
import PrivateRoute from './PrivateRoute'; // import karo
import NotFound from '../pages/NotFound ';
import BlogDetail from '../pages/BlogDetail';

const AppRoutes = () => {
  return (
   <>
     <Routes>

        {/* Website Routes */}
        <Route element={<WebLayout />} >
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/service' element={<Service/>} />
            <Route path='/team' element={<Team/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/sign-up' element={<SignUp/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/blog/:id' element={<BlogDetail/>} />
            <Route path="*" element={<NotFound />} />
        </Route>

       {/* Protected Dashboard Layout */}
      <Route element={<PrivateRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/AddUser' element={<AddUser />} />
          <Route path='/edit/:id' element={<Edituser />} />
        </Route>
      </Route>


     </Routes>
   </>
  )
}

export default AppRoutes;
