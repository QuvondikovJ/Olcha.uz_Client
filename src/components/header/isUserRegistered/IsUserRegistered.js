import {Link} from "react-router-dom";
import svgRoot from "../../../svgIcons.svg";
import '../../../style/header/isUserRegistered/isUserRegistered.scss'

function IsUserRegistered({username, balance, accessVisible, accessClicked, setAccessVisible}) {

    return <div className={'registered_user'} id={'accessVis'}>
        <button className="registered_btn" onClick={accessClicked}>
            <i className="far fa-user"> </i>
            <span className={'user'}>Kabinet</span>
        </button>

        {accessVisible ?
            <div className="enter_cabinet_vis">

                <p className={'text'}>Assalomu alaykum, {username}</p>

                <p className={'balance'}><b>Balance :</b> {balance} so'm</p>

                <div className="department"  onClick={()=>setAccessVisible(false)}>
                    <svg className={'department_icon'}>
                        <use xlinkHref={svgRoot + '#shopping_bag'}></use>
                    </svg>
                    <span>Mening buyurtmalarim</span>
                </div>

                <div className="department"  onClick={()=>setAccessVisible(false)}>
                    <svg className={'department_icon'}>
                        <use xlinkHref={svgRoot + '#book'}></use>
                    </svg>
                    <span>Shaxsiy kabinet</span>
                </div>

                <div className="department"  onClick={()=>setAccessVisible(false)}>
                    <svg className={'department_icon'}>
                        <use xlinkHref={svgRoot + '#bell'}></use>
                    </svg>
                    <span>Bildirgi</span>
                </div>

                <div className="department exit"  onClick={()=>setAccessVisible(false)}>
                    <svg className={'department_icon'}>
                        <use xlinkHref={svgRoot + '#exit'}></use>
                    </svg>
                    <span>Chiqish</span>
                </div>

            </div>
            : ''}

    </div>


}

export default IsUserRegistered