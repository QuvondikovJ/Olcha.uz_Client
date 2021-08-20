import click from "../../../images/click.jpeg";
import payme from "../../../images/payme.svg";
import apelsin from "../../../images/apelsin.png";
import '../../../style/header/cart/templateForCheckout/paymentType.scss'
function PaymentType(){

    return   <div className="payment_type">
        <h4 className="sup_title">To'lov turi</h4>
        <div className="payment_item">
            <div>
                <input type="radio" id={'cash'} name={'payment'}/>
                <label htmlFor={'cash'}>Naqd to'lash</label>
            </div>
            <p>To'lov o'zbek so'mi shaklida maxsulotni olayotgan paytda amalga oshiriladi.</p>
        </div>

        <div className="payment_item">
            <div>
                <input type="radio" id={'terminal'} name={'payment'}/>
                <label htmlFor={'terminal'}>Terminalorqali to'lovlar</label>
            </div>
            <p>To‘lovlar UzCard va Humo bank kartalari orqali ham qabul qilinadi.</p>
        </div>

        <div className="payment_item">
            <div>
                <input type="radio" id={'click'} name={'payment'}/>
                <label htmlFor={'click'}>
                    <img src={click} alt="Photo not found!" className={'payment_img'}/>
                    <span>Click orqali to'lov</span>
                </label>
            </div>
        </div>
        <div className="payment_item">
            <div>
                <input type="radio" id={'payme'} name={'payment'}/>
                <label htmlFor={'payme'}>
                    <img src={payme} alt="Photo not found!" className={'payment_img'}/>
                    <span>Payme orqali to'lov</span>
                </label>
            </div>
        </div>
        <div className="payment_item">
            <div>
                <input type="radio" id={'apelsin'} name={'payment'}/>
                <label htmlFor={'apelsin'}>
                    <img src={apelsin} alt="Photo not found!" className={'payment_img apelsin'}/>
                    <span>Apelsin orqali to'lov</span>
                </label>
            </div>
        </div>
    </div>

}
export default PaymentType