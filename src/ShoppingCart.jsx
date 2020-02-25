import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Body from './components/Body';

const ShoppingCart = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <Navbar />
                    <Body />
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;
