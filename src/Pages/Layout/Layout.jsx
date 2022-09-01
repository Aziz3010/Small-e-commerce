import React from 'react';
import View from '../../Routers/Router';
import Navbar from '../../Components/Navbar/Navbar';
import Brands from '../../Components/Brands/Brands';
import Footer from '../../Components/Footer/Footer';

const Layout = () => {
    return <>
        <Navbar />
        <main>
            <View />
            {/* after navbar */}
            {/* products */}
            {/* product details */}
        </main>
        <Brands />
        <Footer />
    </>
}

export default Layout;