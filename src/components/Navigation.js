import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
    const navLinkStyle = {color: 'white'}
    
    return (
        <nav>
            <h3>Logo</h3>
            <ul className = 'nav-link'>
                <li>
                    <Link to ='/' style={navLinkStyle}>Home</Link>
                    
                    </li>

                <li>
                <Link to ='/products' style={navLinkStyle}>Products</Link>
                    
                    
                </li>

                <li>
                <Link to ='/about' style={navLinkStyle}>About</Link>
                    
                    </li>
            </ul>
        </nav>
    )
}

export default Navigation;

