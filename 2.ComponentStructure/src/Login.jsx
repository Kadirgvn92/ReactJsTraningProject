import React from 'react'

export const users = [
    {
        username: "enes",
        password: "1"
    },
    {
        username: "kadir",
        password: "2"
    }
]

function Login() {
    return (
        <>
            <div>
                <div>
                    <p>Kullanıcı Adınız</p>
                    <input type="text" />
                </div>

                <div>
                    <p>Şifreniz</p>
                    <input type="text" />
                </div>


                <button type='submit'>Gönder</button>
            </div>

        </>
    )
}

export default Login