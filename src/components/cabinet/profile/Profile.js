import '../../../style/cabinet/profile/profile.scss'
import svgRoot from '../../../svgIcons.svg'
import {Link} from "react-router-dom";
import DepartmentsInCabinet from "../cabinetTemplate/DepartmentsInCabinet";

function Profile() {

    function copyLink() {
        let copyText = document.getElementById("copied_text");
        copyText.select();
        document.execCommand("copy");
    }

    const userData = {
        phone: '+ 998(97)104-29-69',
        name: 'Javohir',
        email: 'olcha@gmail.com',
        birthDate: '02-11-1999',
        balance: 0,
        referenceUser: 'https://olcha.uz/user/referal/52041',
        gender: 'Male',
        lastName: 'Quvondikov',
        password: '************'
    }

    function profileEditClicked(){
        /* bu yerdan /history.push(/cabinet/profile/edit/id) qilib berivoramiz va bu id ni
        * profileEdit componentda ushlab olib shu id li userni backenddan olib kelib input larni to'ldirib chiqamiz
        * va bu button da Link tagini olib tashlaymiz! */
    }

    return <div className={'profile'}>

        <div className="container">

            <div className="path">
                <Link to={'/'}>Bosh sahifa </Link>
                <span>/</span>
                <Link to={'/cabinet'}>Kabinet</Link>
                <span>/</span>
                <Link to={'/cabinet/profile'}>Profile</Link>
            </div>

        <div className="profile_inner">


            <div className="profile_item">
                <DepartmentsInCabinet />
            </div>


            <div className="profile_item">
            <div className="user_data_keys">

                <p>Telefon raqami :</p>
                <p>Ism :</p>
                <p>Familiya :</p>
                <p>Elektron pochta :</p>
                <p>Tug'ilgan sana :</p>
                <p>Jins :</p>
                <p>Parol : </p>

                <Link to={'/cabinet/profile/edit'}>
                    <button className="profile_edit" onClick={profileEditClicked}>
                        <svg className={'edit_icon'}>
                            <use xlinkHref={svgRoot + '#edit'}></use>
                        </svg>
                        <span>O'zgartirish</span>
                    </button>
                </Link>

            </div>

            <div className="user_data_values">

                <p>{userData.phone}</p>
                <p>{userData.name}</p>
                <p>{userData.lastName}</p>
                <p>{userData.email}</p>
                <p>{userData.birthDate}</p>
                <p>{userData.gender}</p>
                <p>{userData.password}</p>

            </div>
            </div>


            <div className="profile_item">

                <div className="balance_block">
                    <h5 className={'title'}>Balance :</h5>
                    <p className={'text'}>Bonus hisobi : {userData.balance} so'm</p>
                </div>

                <div className="offer_block">
                    <h5 className={'title'}>Do'stlaringizni taklif qiling</h5>
                    <p className={'text'}>Va bonus sifatida hisobingizga sum oling</p>

                    <div className="copy">
                        <input type={'text'} readOnly={'readonly'} className="copy_text" value={userData.referenceUser}
                               id={'copied_text'}/>
                        <button className="copy_btn" onClick={copyLink}>Copy</button>
                    </div>

                </div>
            </div>

        </div>


        </div>

    </div>

}

export default Profile