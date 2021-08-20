import {Link} from "react-router-dom";
import DepartmentsInCabinet from "../cabinetTemplate/DepartmentsInCabinet";
import '../../../style/cabinet/order/orders.scss'
import $ from 'jquery'
import OrderTemplate from "./OrderTemplate";
import {useEffect, useState} from "react";
import svgRoot from '../../../svgIcons.svg'
import Pagination from "../../pagination/Pagination";

function Orders() {


    const products = [
        {
            id: 1,
            name: 1,
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 2,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 3,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 4,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 5,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 6,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 7,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 8,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 9,
            name: 2,
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 10,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 11,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 12,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 13,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        },
        {
            id: 14,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 15,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 16,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 17,
            name: 3,
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 18,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 19,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 20,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 21,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 22,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 23,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 24,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 25,
            name: 4,
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 26,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        },
        {
            id: 27,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 28,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 29,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 30,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 31,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 32,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 33,
            name: 5,
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 34,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 35,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 36,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 37,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 38,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 39,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        },
        {
            id: 40,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 41,
            name: 6,
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 42,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 43,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 44,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 45,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 46,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 47,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 48,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'

        }, {
            id: 49,
            name: 7,
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 50,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 51,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 52,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        },
        {
            id: 53,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 54,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        },{
            id: 55,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 56,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 57,
            name: 8,
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 58,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 59,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 60,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 61,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 62,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 63,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 64,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 65,
            name: 9,
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }, {
            id: 66,
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version',
            category: 'Smart watch',
            count: 2,
            price: '299 000'
        }
    ]

    const [renderedProducts, setRenderedProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)


    let amountPage = (products.length - products.length % 8) / 8 + 1;

    useEffect(() => {
        renderedProductsFunction(1)
    }, [])

    function renderedProductsFunction(page) {
        let arr = []
        products.map((item, index) => {
            if ((page - 1) * 8 < item.id && item.id <= page * 8)
                arr.push(item)
        })
        setRenderedProducts([...arr])
        setCurrentPage(page)

        setTimeout(() => {
            $('#pagination button').removeClass('active')
            $('#btn_' + page).addClass('active')
        }, 100)

        let leftIcon = $('#left')
        let rightIcon = $('#right')

        page === 1 ? leftIcon.addClass('disabled') : leftIcon.removeClass('disabled')
        page === amountPage ? rightIcon.addClass('disabled') : rightIcon.removeClass('disabled')

    }


    function activeClicked() {
        $('#order_block button').removeClass('active')
        $('#order_active').addClass('active')
        $('#order_title').text('Active holatdagi buyurtmalar mavjud emas...')

        /*  Bu yerdan back endga active order larni olib kealdigan request yuboriladi */
    }

    function completedClicked() {
        $('#order_block button').removeClass('active')
        $('#order_completed').addClass('active')
        $('#order_title').text('Yakunlangan buyurtmalar mavjud emas...')
        /*  Bu yerdan back endga completed order larni olib kealdigan request yuboriladi */

    }

    function installmentClicked() {
        $('#order_block button').removeClass('active')
        $('#order_installment').addClass('active')
        $('#order_title').text('Yakunlangan buyurtmalar mavjud emas...')
        /*  Bu yerdan back endga completed order larni olib kealdigan request yuboriladi */
    }

    return <div className={'orders_comp'}>
        <div className="container">

            <div className="path">
                <Link to={'/'}>Bosh sahifa </Link>
                <span>/</span>
                <Link to={'/cabinet'}>Kabinet</Link>
                <span>/</span>
                <Link to={'/cabinet/orders'}>Buyurtmalar</Link>
            </div>

            <div className="order_inner">

                {/* First order item */}
                <div className="order_item">
                    <DepartmentsInCabinet/>
                </div>

                {/* Second order item */}
                <div className="order_item">

                    <div className="order_block" id={'order_block'}>

                        <button className={'orders_btn active'} id={'order_active'} onClick={activeClicked}>Aktiv
                            holatdagi
                            buyurtmalar
                        </button>
                        <button className={'orders_btn'} id={'order_completed'} onClick={completedClicked}>Buyurtmalarni
                            yakunlash
                        </button>
                        <button className={'orders_btn'} id={'order_installment'} onClick={installmentClicked}>Muddatli
                            to'lov
                        </button>
                    </div>


                    {/*If no orders*/}
                    <div className="no_orders">

                        <svg className={'order_icon'}>
                            <use xlinkHref={svgRoot + '#orders'}></use>
                        </svg>
                        <h4 className={'order_title'} id={'order_title'}>Active holatdagi buyurtmalar mavjud
                            emas...</h4>
                    </div>


                    {/* If there are orders */}
                    {/*<div className="ordered_products">*/}

                    {/*    {renderedProducts.map((item, index) =>*/}
                    {/*        <OrderTemplate name={item.name}*/}
                    {/*                       category={item.category} count={item.count} price={item.price}/>*/}
                    {/*    )}*/}

                    {/*</div>*/}

                    {/*Pagination */}
                    {/*<Pagination currentPage={currentPage} amountPage={amountPage}*/}
                    {/*            renderedProductsFunction={renderedProductsFunction}/>*/}

                </div>

            </div>


        </div>
    </div>

}

export default Orders