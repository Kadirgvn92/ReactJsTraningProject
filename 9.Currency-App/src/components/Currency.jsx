import React from 'react'
import './currency.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";



function Currency() {
    return (
        <>
            <div className='title'>
                <h2>Welcome to the Currency4</h2>
            </div>
            <div className='currency-div'>
                <input type="number" className='amount' />
                <select className='from-currency-option'>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="TL">TL</option>
                </select>
                <FaRegArrowAltCircleRight style={{ fontSize: '45px', marginRight: '10px', color: 'white' }} />

                <select className='to-currency-option'>
                    <option value="TL">TL</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                </select>
                <input type="number" className='result' />


            </div>
            <div>
                <button className='exchangeBtn'>Çevir</button>
            </div>
        </>

    )
}

export default Currency