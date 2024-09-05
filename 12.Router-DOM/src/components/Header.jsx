import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <Link className='link' to="/">Anasayfa</Link>
            <Link className='link' to="/About">Hakkımızda</Link>
            <Link className='link' to="/Products">Ürünlerimiz</Link>
            <Link className='link' to="/Contact">İletişim</Link>
        </div>
    )
}

export default Header