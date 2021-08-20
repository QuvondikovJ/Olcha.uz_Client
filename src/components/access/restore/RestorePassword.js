import '../../../style/access/restore/restorePassword.scss'
import '../../../style/access/template/accessTemplate.scss'
import {toast} from "react-toastify";
import {useState} from "react";
import getPhoneNumber from "../accessPhoneNumberTemplate/getPhoneNumber";

function RestorePassword({props}) {

    const [phone, setPhone] = useState('+ 998')

    function restoreClicked(event) {
        event.preventDefault();
        let phone = event.target[0].value
        if (phone.length < 18) {
            toast.warning('Iltimos telefon raqami maydonini to\'ldiring!')
        } else {

            props.setRestoreVis(false)
            props.setConfirmActivationCodeVis(true)

setPhone('+ 998')
        }
    }

    function changePhoneNumber(event){
        getPhoneNumber(event,phone,setPhone)
    }

    return <div className={'restore_password'}>
        <div className="container">

            <div className="restore_password_block">

                <h4 className={'title'}>Parolni tiklash</h4>

                <form onSubmit={restoreClicked} id={'restorePassword'}>
                    <label htmlFor={'restore'}>Telefon</label>
                    <input type="text" placeholder={'Telfon raqami'} id={'restore'} onChange={changePhoneNumber}
                    value={phone}/>
                </form>
                <p className={'activation_code'}>Aktivatsiya kodini olish uchun telefon raqamingizni kiriting.</p>

                <button className="access_btn btn btn-danger" form={'restorePassword'}>Aktivatsiya kodini olish</button>

            </div>

        </div>
    </div>

}

export default RestorePassword