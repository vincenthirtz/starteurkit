import React from 'react'
import {navigate} from 'hookrouter';

const Header = () => (
    <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" onClick={() => navigate('/about')}>
                    <img width="120" src="https://res.cloudinary.com/smooth/image/upload/f_auto,q_auto,w_400/v1513100168/Screen_Shot_2017-12-12_at_18.35.38_zshol5.png" alt=""/>
                </a>
     
            </div>
        </nav>
    </header>
)

export default Header