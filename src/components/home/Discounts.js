import chegirma from '../../images/home/chegirma.png'
import '../../style/home/discount.scss'
import React from 'react'
import phone from '../../images/home/phone.jpeg'
import star from "../../svgIcons.svg";

function Discounts() {

    function scrollFunction() {
        let container = document.getElementById('container')
        if (container) {
            let containerWidth = container.offsetWidth
            if (containerWidth > 1090) {
                let discountBlock = document.getElementById('discount_block')
                let discount = document.getElementById('discount')
                let h = discountBlock.offsetTop
                let windowH = window.scrollY
                if (h > windowH) {
                    discount.style.height = '790px'
                } else if (windowH - h <= 330) {
                    discount.style.position = 'sticky'
                    discount.style.top = '0px'
                    discount.style.height = (810 - (windowH - h)) + 'px'
                }
            }
        }
    }


    window.onscroll = scrollFunction

    const products = [
        {
            name: 'Veb-kamera defender c-2525',
            payment: '115000 so‘m/oy',
            discount: '1 500 000 so‘m',
            price: '1 177 000 so‘m'
        }, {
            name: 'Veb-kamera defender c-2525',
            payment: '115000 so‘m/oy',
            discount: '1 500 000 so‘m',
            price: '1 177 000 so‘m'
        }, {
            name: 'Veb-kamera defender c-2525',
            payment: '115000 so‘m/oy',
            discount: '1 500 000 so‘m',
            price: '1 177 000 so‘m'
        }, {
            name: 'Veb-kamera defender c-2525',
            payment: '115000 so‘m/oy',
            discount: '1 500 000 so‘m',
            price: '1 177 000 so‘m'
        }, {
            name: 'Veb-kamera defender c-2525',
            payment: '115000 so‘m/oy',
            discount: '1 500 000 so‘m',
            price: '1 177 000 so‘m'
        }, {
            name: 'Veb-kamera defender c-2525',
            payment: '115000 so‘m/oy',
            discount: '1 500 000 so‘m',
            price: '1 177 000 so‘m'
        }, {
            name: 'Veb-kamera defender c-2525',
            payment: '115000 so‘m/oy',
            discount: '1 500 000 so‘m',
            price: '1 177 000 so‘m'
        },
        {
            name: 'Veb-kamera defender c-2525',
            payment: '115000 so‘m/oy',
            discount: '1 500 000 so‘m',
            price: '1 177 000 so‘m'
        }
    ]


    return <div className={'discount_block'} id={'discount_block'}>

        <div className="container" id={'container'}>

            <div className="discount_inner">

                <div className="discount_item" id={'discount'}>

                    <div className="title">
                        Muddatli to'lov
                    </div>
                    <div className="text">
                        Bank kreditisiz va penyasiz
                    </div>
                    <img src={chegirma} alt="Not found!"/>
                    <button className="btn btn-outline-light discount_btn">Barchasini ko'rish</button>
                </div>

                <div className="discount_item">
                    <h2 className={'title'}> Chegirmalar</h2>
                    <div className={'discount_products'}>

                        {products.map((item, index) =>
                                <div className="dis_product_item" key={index}>
                                    <img src={phone} alt={'Not found!'}/>

                                    <p className={'product_name'}>
                                        {item.name}
                                    </p>

                                    <p className={'rassrochka'}> {item.payment}</p>
                                    <p className={'discount'}> {item.discount}</p>
                                    <p className={'price'}>{item.price}</p>

                                    <span className={'heart'}>
                        <i className="far fa-heart"> </i>
                                        {/*<i className="fas fa-heart">  </i>*/}
                    </span>

                                    <span className={'delivery'}>
                        <svg>
                            <use xlinkHref={star + '#delivery'}> </use>
                        </svg>
                    </span>

                                </div>
                        )}

                    </div>

                </div>


            </div>

        </div>


    </div>

}

export default Discounts