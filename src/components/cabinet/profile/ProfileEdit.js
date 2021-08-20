import DepartmentsInCabinet from "../cabinetTemplate/DepartmentsInCabinet";
import '../../../style/cabinet/profile/profileEdit.scss'
import {Link} from "react-router-dom";
import svgRoot from '../../../svgIcons.svg'
import {toast} from "react-toastify";
import {useState} from "react";

function ProfileEdit() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [gender, setGender] = useState(false)/* Agar false bo'lsa male bo'ladi , true bo'lsa female bo'ladi*/
    const [email, setEmail] = useState('')
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [prePassword, setPrePassword] = useState('')
    const [changePasswordVis, setChangePasswordVis] = useState(false)

   function getData(event, inputId){
        let data = event.target.value
        switch (inputId){
            case 1 : setFirstName(data); break;
            case 2 : setLastName(data); break;
            case 3 : setBirthDate(data); break;
            case 4 : setGender(false); break;
            case 5 : setGender(true); break;
            case 6 : setEmail(data); break;
            case 7 : setOldPassword(data); break;
            case 8 : setNewPassword(data); break;
            case 9 : setPrePassword(data); break;
        }
   }

   function passwordEditClicked(){
        setChangePasswordVis(!changePasswordVis)
   }
    function saveClicked() {
        /*  Bu yerda o'zgartirlgan data larni back end ga yuborish kerak! */

        // console.log(firstName)
        // console.log(lastName)
        // console.log(birthDate)
        // console.log(gender)
        // console.log(email)
        // console.log(oldPassword)
        // console.log(newPassword)
        // console.log(prePassword)

        toast.success('O\'zgartirilgan ma\'lumotlar muvaffaqiyatli saqlandi.')
        setChangePasswordVis(false)
    }

    function cancelClicked(){
        setChangePasswordVis(false)
    }

    return <div className={'profile_edit_comp'}>

        <div className="container">

            <div className="path">
                <Link to={'/'}>Bosh sahifa </Link>
                <span>/</span>
                <Link to={'/cabinet'}>Kabinet</Link>
                  <span>/</span>
                <Link to={'/cabinet/profile'}>Profile</Link>
                  <span>/</span>
                <Link to={'/cabinet/profile/edit'}>Edit</Link>


            </div>

            <div className="profile_edit_inner">

                <div className="profile_edit_item">

                    <DepartmentsInCabinet/>
                </div>


                <div className="profile_edit_item">
                    <div className={'row'}>
                        <div className="col-md-6">
                            <label htmlFor={'firstName'}>Ism</label>
                            <input type="text" id={'firstName'} onChange={(event)=>getData(event,1)}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor={'lastName'}>Familiya</label>
                            <input type="text" id={'lastName'} onChange={(event)=>getData(event,2)}/>
                        </div>
                    </div>

                    <div className={'row'}>
                        <div className="col-md-6">
                            <label htmlFor={'birthDate'}>Tug'ilgan sana</label>
                            <input type={'date'} id={'birthDate'} onChange={(event)=>getData(event,3)}/>
                        </div>
                        <div className="col-md-6">
                            <div className="row radio">
                                <p className={'radio_title'}>Jins</p>
                                <div className="col-6">
                                    <input type="radio" id={'male'} name={'gender'} onChange={(event)=>getData(event,4)}/>
                                    <label htmlFor={'male'}>Erkak</label>
                                </div>
                                <div className="col-6">
                                    <input type="radio" id={'female'} name={'gender'} onChange={(event)=>getData(event,5)}/>
                                    <label htmlFor={'female'}>Ayol</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'row'}>
                        <div className="col-md-6">
                            <label htmlFor={'email'}>Elektron pochta</label>
                            <input type="email" id={'email'} onChange={(event)=>getData(event,6)}/>
                        </div>
                        <div className="col-md-6 phone_number">
                            <label>Telefon raqami</label>
                            <input type="text" readOnly={'readonly'} value={'+ 998(97)104-29-69'}/>
                        </div>
                    </div>

                    <button className="password_edit" onClick={passwordEditClicked}>
                        <svg className={'lock_icon'}>
                            <use xlinkHref={svgRoot + '#lock'}></use>
                        </svg>
                        <span>Parolni o'zgartirish</span>
                    </button>
                    {changePasswordVis ?
                        <div className="change_password_block">
                            <div className="item">
                                <label htmlFor={'oldPassword'}>Eski parol</label>
                                <input type="password" id={'oldPassword'} onChange={(event)=>getData(event,7)}/>
                            </div>

                            <div className="item">
                                <label htmlFor={'newPassword'}>Yangi parol</label>
                                <input type="password" id={'newPassword'} onChange={(event)=>getData(event,8)}/>
                            </div>

                            <div className="item">
                                <label htmlFor={'confirmPassword'}>Parolni tasdiqlash</label>
                                <input type="password" id={'confirmPassword'} onChange={(event)=>getData(event,9)}/>
                            </div>

                        </div>

                        : ''
                    }

                    <Link to={'/cabinet/profile'}>
                        <button className="cancel" onClick={cancelClicked}>Bekor qilish</button>
                    </Link>

                    <Link to={'/cabinet/profile'}>
                        <button className="save" onClick={saveClicked}>Tahrirni saqlash</button>
                    </Link>
                </div>

            </div>


        </div>

    </div>

}

export default ProfileEdit