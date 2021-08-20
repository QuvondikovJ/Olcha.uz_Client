import '../../../style/access/register/register.scss'
import '../../../style/access/template/accessTemplate.scss'
import {useRef, useState} from "react";
import {toast} from "react-toastify";
import getPhoneNumber from "../accessPhoneNumberTemplate/getPhoneNumber";
import {Link} from "react-router-dom";

function Register({props}) {

    const [phone, setPhone] = useState('+ 998')

    function registerClicked(event) {
        event.preventDefault();
        if (phone.length < 18) {
            toast.warning('Iltimos telefon raqami maydonini to\'ldiring.');
        }else {
            props.setRegisterVis(false)
            props.setConfirmActivationCodeVis(true)
            event.target[0].value = '+ 998'
            setPhone('+ 998')
        }
    }

    function phoneChange(event){
        getPhoneNumber(event,phone, setPhone)
    }


    return <div className={'register'}>
        <div className="container">

            <div className="register_block">
                <h4 className={'title'}>Ro'yxatdan o'tish</h4>

                <form className={'form'} onSubmit={registerClicked} id={'registration'}>
                    <label htmlFor={'register'}>Telefon</label>
                    <input type={'text'} placeholder={'Telefon raqami'} id={'register'} onChange={phoneChange} value={phone}/>
                </form>

                <p className={'activation_code'}>
                    Aktivatsiya kodini olish uchun telefon raqamingizni kiriting.
                </p>

                <button className="access_btn btn btn-danger" form={'registration'}>
                    Aktivatsiya kodini olish
                </button>
            </div>

            <p className={'enter'}>Ro’yxatdan o’tganmisiz? <Link to={'/authorization'}>Kirish</Link></p>

        </div>
    </div>

}

export default Register