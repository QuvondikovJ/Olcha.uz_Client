import {Link} from "react-router-dom";
import svgRoot from '../../svgIcons.svg'
import '../../style/templatePath/path.scss'
import '../../style/header/cart/cart.scss'
import EmptyCart from "./EmptyCart";
import phone from '../../images/home/phone.jpeg'
import CartItemForCartAndGoToBasketInProduct from "./CartItemForCartAndGoToBasketInProduct";

function Cart() {


    function orderingClicked(){
        /* bu yerdan history.push(/checkout) yo'loiga otib yuboradigan logika yoziladi  */
    }

    return <div className={'cart_comp'}>
        <div className="container">

            <div className="path">
                <Link to={'/'}>Bosh sahifa</Link>
                <span>/</span>
                <Link to={'/cart'}>Savatcha</Link>
            </div>

            <h2 className="cart_title">Savatcha</h2>

            {/* If no products in cart */}
            {/*    <EmptyCart/>*/}


            {/*  If there are products in cart  */}
            <div className="cart_block">

                <div className="cart_item">
                    <CartItemForCartAndGoToBasketInProduct />
                </div>

                <div className="cart_item">

                    <div className="cart_ordering">
                        <div className="form_block">
                            <input type="text" placeholder={'Promo kodni kiriting'}/>
                            <button className="form_btn">ok</button>
                        </div>

                        <div className="price">
                            <span>Narxi: </span>
                            <span>1 172 000 so'm</span>
                        </div>
                        <div className="discount">
                            <span>Chegirma:</span>
                            <span>0 so'm</span>
                        </div>
                        <div className="total_payment">
                            <span>Jami to'lov: </span>
                            <span>1 172 000 so'm</span>
                        </div>
                        <hr className={'hr'}/>
                            <button className="ordering_btn btn btn-danger" onClick={orderingClicked}>
                                Buyurtmani rasmiylashtirish
                            </button>
                    </div>

                </div>

            </div>

        </div>
    </div>

}

export default Cart