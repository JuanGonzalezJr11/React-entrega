import React, { useState } from 'react'
import './FormCheckout.css'

const FormCheckout = ({createOrder}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const changeName = (event) => {
        let name = event.target.value;
        setName(name);
    }
    const changePhone = (event) => {
        let phone = event.target.value;
        setPhone(phone);
    }
    const changeEmail = (event) => {
        let email = event.target.value;
        setEmail(email);
    }

    const submit = (e) => {
        e.preventDefault(); // Evita el postback por defecto de la etiqueta <form>.

        const buyer = {
            name: name,
            phone: phone,
            email: email
        }
        createOrder(buyer);

        setName('');
        setPhone('');
        setEmail('');
    };

    return (
        <div className='div-FormCheckout'>
            <h1>Checkout ✔</h1>
            <form onSubmit={submit} className='form'>
                <p>👤 Name:</p>
                <input id='txtName' type='text' value={name} onChange={changeName}></input>
                <p>☎ Phone:</p>
                <input id='txtPhone' type='text' value={phone} onChange={changePhone}></input>
                <p>✉ E-mail:</p>
                <input id='txtEmail' type='text' value={email} onChange={changeEmail}></input>
                <br />
                <button type='submit'>Submit and buy</button>
            </form>
        </div>
    )
}

export default FormCheckout