import React from 'react';
import Items from './Items';
import item1 from '../img/insert2.jpg';

const Body = () => {
    return (
        <div className="container">
            <div className="row">
                <Items  image={item1} item="Jeans Top" price={24.99} quantity="12 x 10" />
                <Items  image={item1} item="Jeans Top" price={44.99} quantity="8 x 10" />
                {/* <Items /> */}
            </div>
        </div>
    );
}

export default Body;
