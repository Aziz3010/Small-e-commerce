import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Shop from '../Pages/Shop/Shop';
import Product from '../Pages/Product/Product';

const Router = () => {
    return <Routes>
    <Route exact path='/' element={ <Navigate to='/shop' /> } />
    <Route path='/shop' element={ <Shop /> } />
    <Route path='/shop/:id' element={ <Product /> } />
</Routes>
}

export default Router;