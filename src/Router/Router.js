
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './../components/Header'
import Login from './../containers/Login'
import Manager from './../components/Manager'
import Nosotros from './../components/Nosotros'
import Contacto from './../components/Contacto'
import Footer from './../components/Footer'

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/Manager' element={<Manager />} />
                    <Route path='/Nosotros' element={<Nosotros />} />
                    <Route path='/Contacto' element={<Contacto />} />
                    {/* <Route path='*' component={NotFound} /> */}
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default Router
