import {Link} from "react-router-dom";
import order from "../../../images/order_offer.pdf";
import '../../../style/header/cart/templateForCheckout/detailedAboutProduct.scss'
function DetailedAboutProduct(){


    return               <div className="detailed_about_product">
        <h4 className={'title'}>Buyurtma haqida batafsil</h4>

        <div className="inner_block">
            <span>Tanlangan to‘lov usuli va yetkazib berish turi:</span>
            <span>Uy yoki ofisga eltish</span>
        </div>

        <div className="about_delivery">
            <h3 className={'title'}>Yetkazib berish:</h3>
            <div className="delivery_item">
                <span>Yetkazib berish turi:</span>
                <span>Express</span>
            </div>
            <div className="delivery_item">
                <span>To‘lov usuli:</span>
                <span>Naqd to‘lash</span>
            </div>
            <div className="delivery_item">
                <span>To'lov sistemasi:</span>
                <span>Click</span>
            </div>
        </div>

        <div className="total_cash">
            <span>Jami :</span>
            <span>1 471 000 so'm</span>
        </div>

        <p className={'order_rules'}>
            "Rasmiylashtirishni yakunlash" tugmasini bosish orqali, men
            <Link to={order} target={'_blank'}>kelishilgan oferta shartnomasiga</Link>
            roziligimni bildiraman
        </p>

        <button className="order_btn btn btn-danger">Buyurtmani rasmiylashtirish</button>
    </div>


}
export default DetailedAboutProduct