import {Link} from "react-router-dom";
import DepartmentsInCabinet from "../cabinetTemplate/DepartmentsInCabinet";
import svgRoot from "../../../svgIcons.svg";
import '../../../style/cabinet/favourite/favourite.scss'
import '../../../style/cabinet/favourite/favouriteTemplate/emptyTemplateForFavourite.scss'
import FavouriteTemplate from "./FavouriteTemplate";
import Pagination from "../../pagination/Pagination";
import {useState} from "react";
import $ from "jquery";
function Favourite(){

    const favouriteProducts = [
        {
            id : 1,
            category : 'Smart watch',
            name : 'Xiaomi Mi Band 5, Black XMSH10HM (Global version)',
            price : '299 000'
        },
        {
            id : 2,
            category : 'Smart watch',
            name : 'Xiaomi Mi Band 5, Black XMSH10HM (Global version)',
            price : '299 000'
        },
        {
            id : 3,
            category : 'Smart watch',
            name : 'Xiaomi Mi Band 5, Black XMSH10HM (Global version)',
            price : '299 000'
        },
        {
            id : 4,
            category : 'Smart watch',
            name : 'Xiaomi Mi Band 5, Black XMSH10HM (Global version)',
            price : '299 000'
        },
        {
            id : 5,
            category : 'Smart watch',
            name : 'Xiaomi Mi Band 5, Black XMSH10HM (Global version)',
            price : '299 000'
        },
        {
            id : 6,
            category : 'Smart watch',
            name : 'Xiaomi Mi Band 5, Black XMSH10HM (Global version)',
            price : '299 000'
        },
        {
            id : 7,
            category : 'Smart watch',
            name : 'Xiaomi Mi Band 5, Black XMSH10HM (Global version)',
            price : '299 000'
        },
        {
            id : 8,
            category : 'Smart watch',
            name : 'Xiaomi Mi Band 5, Black XMSH10HM (Global version)',
            price : '299 000'
        },
        {
            id : 9,
            category : 'Smart watch',
            name : 'Xiaomi Mi Band 5, Black XMSH10HM (Global version)',
            price : '299 000'
        },
        {
            id : 10,
            category : 'Smart watch',
            name : 'Xiaomi Mi Band 5, Black XMSH10HM (Global version)',
            price : '299 000'
        },
        {
            id : 11,
            category : 'Smart watch',
            name : 'Xiaomi Mi Band 5, Black XMSH10HM (Global version)',
            price : '299 000'
        },
        {
            id : 12,
            category : 'Smart watch',
            name : 'Xiaomi Mi Band 5, Black XMSH10HM (Global version)',
            price : '299 000'
        }
    ]


    return <div className={'favourite_comp'}>
        <div className="container">

            <div className="path">
                <Link to={'/'}>Bosh sahifa </Link>
                <span>/</span>
                <Link to={'/cabinet'}>Kabinet</Link>
                <span>/</span>
                <Link to={'/cabinet/favourite'}>Tanlangan mahsulotlar</Link>
            </div>

            <div className="favourite_inner">

                <div className="favourite_item">
                    <DepartmentsInCabinet/>
                </div>

                <div className="favourite_item">
                    <h2 className="selected_title">
                        Tanlangan mahsulotlar
                    </h2>


                    {/* If no favourite products */}
                    <div className="selected_block">

                        <svg className={'heart_icon'}>
                            <use xlinkHref={svgRoot + '#heart'}></use>
                        </svg>

                        <h3 className="title">
                            Tanlangan mahsulotlaringiz yo'qmi ? Bu muammo emas!
                        </h3>

                        <p className="text">
                            Bizning keng assortimentga ega katalogalarimizdan o’z mahsulotingizni tanlang.
                        </p>

                        <Link to={'/'}>
                            <button className="selected_btn btn btn-danger">Mahsulotlarni tanlash</button>
                        </Link>
                    </div>


                    {/*  If there are products */}

                    {/*                    <div className="favourite_products">*/}
                    {/*                        {favouriteProducts.map(item=>*/}
                    {/*<FavouriteTemplate category={item.category} name={item.name}*/}
                    {/*price={item.price}/>*/}
                    {/*                        )}*/}

                    {/*</div>*/}


                    {/*  Bu yerda pagination bo'lishi kerak! */}

                </div>

            </div>

        </div>
    </div>


}
export default Favourite