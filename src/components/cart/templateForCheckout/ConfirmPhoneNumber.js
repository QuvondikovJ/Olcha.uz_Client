import '../../../style/header/cart/templateForCheckout/confirmPhoneNumber.scss'
import {useState} from "react";

function ConfirmPhoneNumber({changePhoneNumber, phoneNumber}) {

    const [isUserRegistered, setIsUserRegistered] = useState(false)

    return isUserRegistered ? '' :
        <div className="confirm_phone">
            <div className="sup_title">Raqamni tasdiqlash</div>

            <div className="row">
                <div className="col-md-6">
                    <div className="form_block">
                        <label htmlFor={'phone'}>Telefon raqami</label>
                        <input type="text" id={'phone'} onChange={changePhoneNumber} value={phoneNumber}/>
                    </div>

                    <button className="activation_code">Aktivatsiya kodini olish</button>
                </div>
            </div>

        </div>


}

export default ConfirmPhoneNumber