import React from 'react'
import { Link } from 'react-router-dom'
import SignInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return (
        <nav className='nav-wrapper grey darken-3'> 
            <div className='container'>
                <Link to='/' className='brand-logo'>MarioPlan</Link>
                <SignInLinks />
                <SignedOutLinks />
            </div>
        </nav> 
    )
}

export default Navbar

/*

AQUI É O HEADER POR INTEIRO

*/