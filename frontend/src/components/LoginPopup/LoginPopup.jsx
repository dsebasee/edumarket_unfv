import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const LoginPopup = ({ setShowLogin }) => {

    const { setToken, url,loadCartData } = useContext(StoreContext)
    const [currState, setCurrState] = useState("Registro");

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({ ...data, [name]: value }))
    }

    const onLogin = async (e) => {
        e.preventDefault()

        let new_url = url;
        if (currState === "Iniciar Sesion") {
            new_url += "/api/user/login";
        }
        else {
            new_url += "/api/user/register"
        }
        const response = await axios.post(new_url, data);
        if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token)
            loadCartData({token:response.data.token})
            setShowLogin(false)
        }
        else {
            toast.error(response.data.message)
        }
    }

    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2> <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Registro" ? <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Nombre y Apellido' required /> : <></>}
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Correo Electronico' />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Contraseña' required />
                </div>
                <button>{currState === "Iniciar Sesion" ? "Iniciar Sesion" : "Crear Cuenta"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" name="" id="" required/>
                    <p>Al continuar, acepto los términos de uso y la política de privacidad.</p>
                </div>
                {currState === "Iniciar Sesion"
                    ? <p>¿Crear una nueva cuenta? <span onClick={() => setCurrState('Registro')}>Click Aquí</span></p>
                    : <p>¿Ya tienes una cuenta? <span onClick={() => setCurrState('Iniciar Sesion')}>Iniciar Sesion</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup
