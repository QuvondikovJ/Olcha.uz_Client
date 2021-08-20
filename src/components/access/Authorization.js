import {Link} from "react-router-dom";
import '../../style/access/authorization.scss'
import '../../style/access/template/accessTemplate.scss'
import {useState} from "react";
import {toast} from "react-toastify";
import getPhoneNumber from "./accessPhoneNumberTemplate/getPhoneNumber";

function Authorization() {


    const [phone, setPhone] = useState('+ 998')
    const [password, setPassword] = useState('')
    const [checked, setChecked] = useState(false)

    function enteredData(event) {
        event.preventDefault();
        if (event.target[0].value.length < 18) {
            toast.warning('Iltimos telefon raqam maydonini to\'ldiring')
        } else if (event.target[1].value.length < 5) {
            toast.warning('Paroldagi belgilar soni 5 tadan kam bo\'lishi mumkin emas!')
        } else {
            setPassword(event.target[1].value)
            setPhone('+ 998')
            event.target[1].value = ''
        }
    }

    function checkboxChange() {
        setChecked(!checked)
    }

    function phoneChange(event){
        getPhoneNumber(event, phone, setPhone)
    }

    return <div className={'authorization'}>

        <div className="container">

            <div className="authorization_block">
                <h3 className={'title'}>
                    Avtorizatsiya
                </h3>

                <form onSubmit={enteredData} id={'authorization'}>
                    <label htmlFor={'phone'}>Telefon</label>
                    <input type="text" placeholder={'Telefon raqami'} id={'phone'} onChange={phoneChange} value={phone}/>

                    <label htmlFor={'password'}>Parol</label>
                    <input type="password" placeholder={'Parol'} id={'password'}/>
                </form>

                <div className="remember_password">
                    <input type="checkbox" id={'checkbox'} onChange={checkboxChange}
                           className={'form-check-input btn-outline-danger'}/>
                    <label htmlFor={'checkbox'}>Parolni eslab qolish</label>
                </div>

                <button className="access_btn btn btn-danger" form={'authorization'}>Kirish</button>

                <Link to={'/register'} className={'register_link'}>
                <button className="btn_register">
                    Ro'yxatdan o'tish</button>
                </Link>

                <Link to={'/restorePassword'} className={'restore_password'}>Parolni unutdingizmi?</Link>
            </div>

        </div>

    </div>

}

export default Authorization