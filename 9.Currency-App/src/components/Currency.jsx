import React, { useState } from 'react'
import './currency.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";

let API_KEY = "fca_live_3tkYlJbzTrwwJJTh70LvGGUNvdAUYYqTqDNVs7S9";


function Currency() {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);



    const exhange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);

        const calc = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(calc);
    }

    return (
        <>

            <div className='title' style={{ marginTop: "250px" }}>
                <h2>Welcome to the Currency4</h2>
            </div>
            <div className='currency-div'>
                <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" className='amount' />
                <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
                    <option >USD</option>
                    <option >EUR</option>
                    <option >TRY</option>
                </select>
                <FaRegArrowAltCircleRight style={{ fontSize: '45px', marginRight: '10px', color: 'white' }} />

                <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
                    <option >TRY</option>
                    <option >EUR</option>
                    <option >USD</option>
                </select>
                <input value={result} onChange={(e) => setResult(e.target.value)} type="number" className='result' />


            </div>
            <div>
                <button onClick={exhange} className='exchangeBtn'>Çevir</button>
            </div>
        </>

    )
}

export default Currency