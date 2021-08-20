import {Link} from "react-router-dom";
import svgRoot from "../../svgIcons.svg";
import phone from "../../images/home/phone.jpeg";
import '../../style/header/cart/cartItemForCartAndGoToBasketInProduct.scss'
import {useEffect} from "react";
function CartItemForCartAndGoToBasketInProduct() {

    const cartProducts = [
        {
            img: phone,
            category: 'Smart watch',
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version)',
            count: 1,
            price: '299 000'
        },
        {
            img: phone,
            category: 'Smart watch',
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version)',
            count: 1,
            price: '299 000'
        },
        {
            img: phone,
            category: 'Smart watch',
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version)',
            count: 1,
            price: '299 000'
        },
        {
            img: phone,
            category: 'Smart watch',
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version)',
            count: 1,
            price: '299 000'
        },{
            img: phone,
            category: 'Smart watch',
            name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version)',
            count: 1,
            price: '299 000'
        },
        // {
        //     img: phone,
        //     category: 'Smart watch',
        //     name: 'Xiaomi Mi Band 5, Black XMSH10HM (Global version)',
        //     count: 1,
        //     price: '299 000'
        // },

    ]


    return cartProducts.map(item =>
        <div className="cart_inner_block">
            <img src={item.img} alt="Photo not found!" className={'product_img'}/>
            <div className="product_about">
                <p className="product_category">{item.category}</p>
                <Link to={'/product/id'}><p className="product_name">{item.name}</p></Link>
            </div>
            <div className="product_counter">
                <button className="product_plus">
                    <svg className={'plus_icon'}>
                        <use xlinkHref={svgRoot + '#menu_close'}/>
                    </svg>
                </button>
                <p className="product_count">{item.count}</p>
                <button className="product_minus">
                    <span></span>
                </button>
            </div>
            <p className="product_price">{item.price} so'm</p>
            <button className="product_clear">
                <svg className={'clear_icon'}>
                    <use xlinkHref={svgRoot + '#menu_close'}/>
                </svg>
            </button>
        </div>
    )


}

export default CartItemForCartAndGoToBasketInProduct