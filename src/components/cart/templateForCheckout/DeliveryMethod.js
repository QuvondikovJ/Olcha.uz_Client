import {Link} from "react-router-dom";
import order from "../../../images/order_offer.pdf";
import '../../../style/header/cart/templateForCheckout/deliveryMethod.scss'

function DeliveryMethod() {

    return <div className="delivery_method">
        <h4 className="sup_title">Yetkazib berish usulini tanlang</h4>
        <div className="row">
            <div className="col-md-6">
                <div className="form_block">
                    <select>
                        <option value="">Standart</option>
                        <option value="">Express</option>
                    </select>
                </div>
                <div className="delivery_info">
                    <span>Yetkazib berish usuli:</span>
                    <span>Standart</span>
                </div>
                <div className="delivery_info">
                    <span>Yetkazib berish vaqti:</span>
                    <span>12 ish soatigacha</span>
                </div>
                <div className="delivery_info">
                    <span>Yetkazib berish narxi:</span>
                    <span>0 so‘m</span>
                </div>
            </div>
            <div className="col-md-6">
                <p className={'delivery_right'}>
                    Yetkazib berish jarayonida qiyinchilik tug‘diruvchi holatlar(masalan, katta hajmdagi
                    buyurtmalarni lift nosoz holatda yuqori qavatlarga yetkazib berish)da
                    <Link to={order} target={'_blank'}>qo‘shimcha
                        to‘lov</Link> undiriladi.
                </p>
            </div>
        </div>

    </div>

}

export default DeliveryMethod