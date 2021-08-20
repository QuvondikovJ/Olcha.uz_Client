import svgRoot from "../../../svgIcons.svg";
import '../../../style/catalog/product/goToBasket.scss'
import CartItemForCartAndGoToBasketInProduct from "../../cart/CartItemForCartAndGoToBasketInProduct";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import $ from "jquery";
import {editGoToBasket} from "../../../redux/reducers/GoToBasketReducer";

function GoToBasket() {

    const dispatch = useDispatch()

function closeIconClicked(){
    $('html').removeClass('disabled')
    dispatch(editGoToBasket(false))
}


    return <div className={'go_to_basket_comp'} id={'go_to_basket_comp'}>
        <div className="title_block">
            <h4 className="title">Tovar savatga qo'shildi</h4>

            <svg className={'close_icon'} onClick={closeIconClicked}>
                <use xlinkHref={svgRoot + '#menu_close'}/>
            </svg>

        </div>

        <div className="basket_item">
            <CartItemForCartAndGoToBasketInProduct/>

        <button className="go_basket_btn btn btn-danger">Savatga o'tish</button>
        </div>


    </div>

}

export default GoToBasket