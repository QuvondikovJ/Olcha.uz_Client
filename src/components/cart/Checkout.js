import {useState} from "react";
import getPhoneNumber from "../access/accessPhoneNumberTemplate/getPhoneNumber";
import '../../style/header/cart/checkout.scss'
import DeliveryType from "./templateForCheckout/DeliveryType";
import DeliveryMethod from "./templateForCheckout/DeliveryMethod";
import PaymentType from "./templateForCheckout/PaymentType";
import DetailedAboutProduct from "./templateForCheckout/DetailedAboutProduct";
import ProductList from "./templateForCheckout/ProductList";
import ConfirmPhoneNumber from "./templateForCheckout/ConfirmPhoneNumber";
import '../../style/header/cart/templateForCheckout/leaveComment.scss'
import NameForConnection from "./templateForCheckout/NameForConnection";
function Checkout() {

    const [phoneNumber, setPhoneNumber] = useState('+ 998')


    function changePhoneNumber(event) {
        getPhoneNumber(event, phoneNumber, setPhoneNumber)
    }


    return <div className={'checkout_comp'}>
        <div className="container">

            <h1 className={'title'}>Buyurtmani rasmiylashtirish</h1>

            <div className="checkout_inner">

                <div className="checkout_item">

                    {/*  Product list  */}
                    <ProductList/>

                    {/*  Confirm phone number */}
                  <ConfirmPhoneNumber phoneNumber={phoneNumber} changePhoneNumber={changePhoneNumber} />

                    {/*  For connection name */}
                   <NameForConnection />


                    {/* Delivery type   */}
                    <DeliveryType/>

                    {/*  Delivery method  */}
                    <DeliveryMethod/>

                    {/* Payment type */}
                    <PaymentType/>


                    {/*  Leave a comment  */}
                    <div className="comment_block">
                        <h4 className={'sup_title'}>Buyurtmaga izohingizni qoldiring</h4>
                        <textarea placeholder={'Mo\'ljal, Siz bilan bog\'lanish uchun qo\'shimcha telefon raqami.'}/>
                    </div>

                </div>


                <div className="checkout_item">

                    <DetailedAboutProduct/>

                </div>

            </div>


        </div>
    </div>


}

export default Checkout