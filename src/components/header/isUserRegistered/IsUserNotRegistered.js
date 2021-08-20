import {Link} from "react-router-dom";
import svgRoot from "../../../svgIcons.svg";
import '../../../style/header/isUserRegistered/isUserNotRegistered.scss'

function IsUserNotRegistered({accessClicked, accessVisible, setAccessVisible}) {
    return <div className="access" id={'accessVis'}>
        <button className={'access_btn'} onClick={accessClicked}>
            <i className="far fa-user"> </i>
            <span className={'user'}>Kirish</span>
        </button>

        {accessVisible ?
            <div className="access_vis">

                <p className={'text'}>
                    Maxsulotlarni xarid qilish va ularni kuzatib borish uchun kiring
                </p>

                <div className="login" onClick={() => setAccessVisible(false)}>
                    <Link to={'/authorization'}>
                        <svg className={'login_icon'}>
                            <use xlinkHref={svgRoot + '#login'}></use>
                        </svg>
                        <p className={'login_text'}>Kirish</p>
                    </Link>
                </div>


                <div className="registration" onClick={() => setAccessVisible(false)}>
                    <Link to={'/register'}>
                        <svg className={'registration_icon'}>
                            <use xlinkHref={svgRoot + '#registration'}></use>
                        </svg>

                        <p className={'registration_text'}>Registratsiyadan o'tish</p>
                    </Link>
                </div>

            </div>
            : ''}

    </div>

}

export default IsUserNotRegistered