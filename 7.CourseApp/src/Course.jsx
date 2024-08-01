import React from 'react'
import './css/Course.css'

function Course({ course }) {
    console.log(course)
    const { id, title, description, price, link, image } = course;
    return (
        <div className='course'>
            <div className='alt-course'>
                <img src={image} alt="" height='500px' />
                <h4>Kurs Adı : {title}</h4>
                <h5>Açıklama : {description}</h5>
                <h3>Fiyat : {price}</h3>
                <a href={link} > Link : {link}</a>
            </div>
        </div>
    )
}

export default Course