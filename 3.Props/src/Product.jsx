import React from 'react'

function Product({ productName, price }) {

    console.log(productName, price)

    return (
        <>

            <div><strong>Ürün Bilgileri</strong></div>
            <br />
            <div>
                <div>İsim : {productName}</div>
                <div>Fiyat : {price}</div>
            </div>
        </>
    )
}

export default Product