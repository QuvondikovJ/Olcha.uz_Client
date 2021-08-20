import {Link} from "react-router-dom";
import '../../../style/access/register/setPassword.scss'
import {useState} from "react";
function SetPassword({props}){

    const [password,setPassword] = useState('')
    const [prePassword,setPrePassword] = useState('')
    const [checkBoxValue,setCheckboxValue] = useState(false)

    function getPrePassword(event){
        setPrePassword(event.target.value)
    }

    function getPassword(event){
        setPassword(event.target.value)
    }

    function getCheckboxValue(event){
        setCheckboxValue(event.target.checked)
    }

    function getData(){
        /*  Bu yerdan backendga data yuboriladi */

        props.setPasswordVis(false)
        props.setRegisterVis(true)

    }


    return <div className={'set_password'}>
        <div className="container">

            <div className="set_password_block">
                <h4 className="title">
                    Ro'yxatdan o'tish
                </h4>

                <div className={'get_password'}>
                    <div>
                    <label htmlFor="password">Parol</label>
                    <input type="password" placeholder={'Parol'} id={'password'}
                    onChange={getPassword}/>
                    </div>
                    <div>
                    <label htmlFor="prePassword">Parolni qayta tering</label>
                    <input type="password" placeholder={'Parolni qayta tering'} id={'prePassword'}
                    onChange={getPrePassword}/>
                    </div>
                </div>

                <div className="confirm">
                    <input type="checkbox" id={'confirm'} className={'form-check-input btn-danger'}
                    onChange={getCheckboxValue}/>
                    <label htmlFor={'confirm'}>Men shaxsiy ma'lumotlarim  tegishli shartlar asosida qayta ishlanishiga roziman.</label>
                </div>

                <button className="access_btn btn btn-danger" onClick={getData}>
                    Ro'yxatdan o'tish
                </button>
            </div>

            <p className={'enter'}>Ro’yxatdan o’tganmisiz? <Link to={'/authorization'}>Kirish</Link></p>


        </div>
    </div>

}
export default SetPassword