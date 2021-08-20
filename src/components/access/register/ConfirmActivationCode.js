import {Link} from "react-router-dom";
import {useState} from "react";
import '../../../style/access/register/confirmActivationCode.scss'
import '../../../style/access/template/accessTemplate.scss'
import getPhoneNumber from "../accessPhoneNumberTemplate/getPhoneNumber";
import {toast} from "react-toastify";

function ConfirmActivationCode({props}) {


    const [activationCode, setActivationCode] = useState('')
    const [phone, setPhone] = useState('+ 998')


    function checkPhoneNumber(event) {
        getPhoneNumber(event, phone, setPhone)
    }

    function checkActivationCode(event) {
        if (phone.length === 18) {
            setActivationCode(event.target.value)

            // Bu yerdan activatsiya codi backend ga berib yuborilib tetkshiriladi

            // props.setConfirmActivationCodeVis(false)
            // props.setPasswordVis(true)

        } else {
            toast.warning('Iltimos, avval telefon raqam maydonini to\'ldiring!')
        }
    }

    function resendCode(){
        alert('Bu yerda yana bir bor code yuborish logikasi bo\'ladi')
    }


    return <div className={'confirmation_activation_code'}>
        <div className="container">
            <div className="activation_code_inner">

                <h4 className={'title'}>Ro'yxatdan o'tish</h4>

                <form action="">
                    <label htmlFor={'phone'}>Telefon</label>
                    <input type="text" placeholder={'Telefon raqami'} id={'phone'}
                          onChange={checkPhoneNumber} value={phone}/>
                    <p className={'activation_code'}>
                        Aktivatsiya kodini olish uchun telefon raqamingizni kiriting.
                    </p>

                    <label htmlFor={'getActivationCode'}>Kod</label>
                    <input type="text" placeholder={'Aktivlashtirish kodini kiriting'}
                           id={'getActivationCode'} onChange={checkActivationCode} value={activationCode}/>
                </form>

                <button className={'resend_code'} onClick={resendCode}>Kodni yana bir bor yuborish</button>

            </div>


            <p className={'enter'}>Ro’yxatdan o’tganmisiz? <Link to={'/authorization'}>Kirish</Link></p>

        </div>
    </div>

}

export default ConfirmActivationCode