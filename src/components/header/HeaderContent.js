import logo from '../../images/logo/logo.svg'
import '../../style/header/headerContent.scss'
import svgRoot from '../../svgIcons.svg'
import {useRef} from "react";
import {Link} from "react-router-dom";

function HeaderContent() {

    const catalog = useRef();

    function catalogClicked() {
        catalog.current.classList.toggle('click')
    }

    return <div className={'header_content'}>

        <div className="container">

            {/* Logo Row */}
            <div className="logo_row">

                {/* First item of Logo row */}
                <div className={'first_item'}>

                    {/* Logo */}
                    <Link to="/">
                        <img src={logo} alt="Not found!"/>
                    </Link>

                    <div className="catalog_group">

                        {/* Catalog */}
                        <button className="catalog btn btn-danger" ref={catalog} onClick={catalogClicked}>
                            <div className={'catalog_icon'}>
                                {/* Menu  */}
                                <svg className={'menu'}>
                                    <use xlinkHref={svgRoot + '#menu'}>   </use>
                                </svg>
                                {/* Menu close */}
                                <svg className={'menu_close'}>
                                    <use xlinkHref={svgRoot + '#menu_close'}>    </use>
                                </svg>

                            </div>
                            <span className={'catalog_word'}>Каталог</span>
                        </button>

                        {/* Search */}
                        <div className="search">

                            <form className={'search_form'}>
                                <input type="text" placeholder={'Mahsulotlar aro qidiruv'}/>
                                <button className={'search_btn'}>
                                    <i className="fas fa-search"> </i>
                                </button>
                            </form>
                        </div>

                    </div>

                </div>

                {/* Second item of Logo row */}
                <div className="second_item">

                    {/* Login */}
                    <Link to={'/login'}>
                    <button className={'login'}>
                        <i className="far fa-user"> </i>
                        <span className={'user'}>Kirish</span>
                    </button>
                    </Link>

                    {/* Selected products */}
                    <Link to={'/selectedProducts'}>
                    <button className="selected">
                        <i className="far fa-heart"> </i>
                        <span className={'selected_item'}>Tanlangan</span>
                    </button>
                    </Link>

                    {/* EmptyCart */}
                    <Link to={'/cart'}>
                    <button className="cart">

                        <svg className={'cart_icon'}>
                            <use xlinkHref={svgRoot + '#cart'}></use>
                        </svg>
                        <span className={'cart_item'}>Savatcha</span>
                        <span className="counter">0</span>
                    </button>
                    </Link>

                </div>
            </div>


            {/*  Category Row */}
            <ul className={'category_row'}>
                <li className={'category_link'}><a href={'#'} style={{color: "#fa0000"}}>Telefonlar</a></li>
                <li className={'category_link'}><a href={'#'} style={{color: "#fa0000"}}>Konditsionerlar</a></li>
                <li className={'category_link'}><a href={'#'} style={{color: "#0400ff"}}>Vivo</a></li>
                <li className={'category_link'}><a href={'#'} style={{color: "#ffa200"}}>Xiaomi</a></li>
                <li className={'category_link'}><a href={'#'} style={{color: "#034ea2"}}>Samsung</a></li>
                <li className={'category_link'}><a href={'#'} style={{color: "#c40000"}}>Geymerlar uchun</a></li>
                <li className={'category_link'}><a href={'#'} style={{color: "#ff0000"}}>Atir upalar</a></li>
                <li className={'category_link'}><a href={'#'} style={{color: "#e1c600"}}>Realme</a></li>
                <li className={'category_link'}><a href={'#'} style={{color: "#ff0000"}}>Avto tovarlar</a></li>
            </ul>

        </div>

    </div>

}

export default HeaderContent