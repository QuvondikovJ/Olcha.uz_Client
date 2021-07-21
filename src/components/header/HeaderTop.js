import '../../style/header/headerTop.scss'
import {Link} from "react-router-dom";

function HeaderTop() {


    function changeBackground() {
        document.body.classList.toggle('dark_theme')
    }

    return <div className={'header_top'}>
        <div className="container">

            <div className="navbar">
                <nav className="nav_left">
                    <a href={'#'} className={'nav_link active'}>O'zb</a>
                    <span>|</span>
                    <a href={'#'} className={'nav_link'}>Ўзб</a>
                    <span>|</span>
                    <a href={'#'} className={'nav_link'}>Рус</a>
                </nav>

                <nav className="nav_right">
                    <a href={'#'} className={'nav_link'}> Muddatli to'lov </a>
                    <a href={'#'} className={'nav_link'}>Chegirmalar </a>
                    <Link to={'/delivery'} className={'nav_link'}>Yetkazib berish </Link>
                    <Link to={'/help'} className={'nav_link'}>Yordam </Link>
                    <Link to={'/compare'} className={'nav_link'}>Taqqoslash </Link>

                    <div className={'changeBackground'}>
                        <input type="checkbox" id={'bg'}/>
                        <label htmlFor="bg" className={'bg'} onClick={changeBackground}>
                            <span className={'full_moon'}> </span>
                            <i className="fas fa-moon"> </i>
                        </label>
                    </div>

                </nav>

            </div>
        </div>
    </div>


}

export default HeaderTop;