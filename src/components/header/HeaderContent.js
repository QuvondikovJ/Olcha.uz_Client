import logo from '../../images/logo/logo.svg'
import '../../style/header/headerContent.scss'
import svgRoot from '../../svgIcons.svg'
import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import IsUserRegistered from "./isUserRegistered/IsUserRegistered";
import IsUserNotRegistered from "./isUserRegistered/IsUserNotRegistered";
import $ from "jquery";
import {useDispatch, useSelector} from "react-redux";
import {editCatalog} from "../../redux/reducers/CatalogVisibleReducer";
import {editGoToBasket} from "../../redux/reducers/GoToBasketReducer";

function HeaderContent() {

    const [accessVisible, setAccessVisible] = useState(false)
    const [isUserRegistered, setIsUserRegistered] = useState(false)

    const dispatch = useDispatch();
    const {catalog} = useSelector(({catalogVisibleReducer}) => catalogVisibleReducer)

    function catalogClicked() {
        $('#catalog_btn').toggleClass('click')
        $('body').toggleClass('disabled')
        dispatch(editCatalog(!catalog))
    }

    function accessClicked() {
        setAccessVisible(!accessVisible)
    }

    useEffect(() => {
        document.body.addEventListener('click', handleClickForCatalog)
    }, [])

    /* Add event listener for accessVis */
    function handleClickForCatalog(event) {
        /* For access to System*/
        let accessVis = document.querySelector('#accessVis')
        let checkVis = event.path.includes(accessVis)
        !checkVis && setAccessVisible(false)


        /*  For open catalog list  */
        let catalogComp = document.querySelector('#catalog_comp')
        let catalogBtn = document.querySelector('#catalog_btn')
        let check = event.path.includes(catalogComp) || event.path.includes(catalogBtn)
        if (!check) {
            $('#catalog_btn').removeClass('click')
            $('body').removeClass('disabled')
            dispatch(editCatalog(false))
        }
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
                        <button className="catalog btn btn-danger" id={'catalog_btn'} onClick={catalogClicked}>
                            <div className={'catalog_icon'}>
                                {/* Menu  */}
                                <svg className={'menu'}>
                                    <use xlinkHref={svgRoot + '#menu'}></use>
                                </svg>
                                {/* Menu close */}
                                <svg className={'menu_close'}>
                                    <use xlinkHref={svgRoot + '#menu_close'}></use>
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
                    {isUserRegistered ?
                        <IsUserRegistered username={'Javohir'} balance={'0'} accessVisible={accessVisible}
                                          setAccessVisible={setAccessVisible} accessClicked={accessClicked}/>
                        : <IsUserNotRegistered accessVisible={accessVisible} setAccessVisible={setAccessVisible}
                                               accessClicked={accessClicked}/>
                    }


                    {/* Selected products */}
                    <Link to={`${isUserRegistered ? '/cabinet/favourite' : '/selectedProducts'}`}>
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