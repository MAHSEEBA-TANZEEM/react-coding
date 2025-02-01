import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to={`about`}>About</Link></li>
                <li><Link to={`products/1`}>Product</Link></li>
            </ul>
        </nav>
    </div>
  );
}

export default Navbar