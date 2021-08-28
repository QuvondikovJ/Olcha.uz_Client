import svgRoot from "../../svgIcons.svg";
import {Link} from "react-router-dom";
import '../../style/header/cart/emptyCart.scss'
function EmptyCart(){


    return     <div className="empty_cart_block">

        <svg className={'empty_cart_icon'}>
            <use xlinkHref={svgRoot + '#cart'}></use>
        </svg>

        <div className="title">
            Savatchangiz bo’shmi? Bu muammo emas!
        </div>

        <p className="text">
            Bizning keng assortimentga ega katalogalarimizdan o’z mahsulotingizni tanlang.
        </p>

        <Link to={'/'}>
            <button className="empty_btn btn btn-danger">
                Xaridni boshlash
            </button>
        </Link>

    </div>

}
export default EmptyCart