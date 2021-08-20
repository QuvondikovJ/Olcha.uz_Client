import '../../../style/header/cart/templateForCheckout/deliveryType.scss'
import {useState} from "react";
import ForDeliveryTypeTemp from "./ForDeliveryTypeTemp";
import svgRoot from '../../../svgIcons.svg'

function DeliveryType() {


    const [isUserNotRegistered, setIsUserNotRegistered] = useState(true)
    const [addAddressVis, serAddAddressVis] = useState(false)
    const region = 'Tashkent'
    const district = 'Chilonzor'
    const homeNumber = '1'
    const floor = 2
    const department = 1
    const apartment = 32
    const street = 'Muqimiy'

    function newAddressAdd() {
        serAddAddressVis(!addAddressVis)
    }

    return <div className="delivery_type">
        <h4 className={'sup_title'}>Yetkazib berish turi</h4>

        {isUserNotRegistered  ?

            <ForDeliveryTypeTemp/>

            :

            <div className="address_block">

                <div className="address_item">
                    <div>
                        <input type="radio" name={'address'}/>
                        <h6 className={'address_title'}>{region}, {district} tumani, {street}, {homeNumber}</h6>
                    </div>
                    <p className={'address_text'}>Qavat : {floor}</p>
                    <p className={'address_text'}>Bo'linma : {department}</p>
                    <p className={'address_text'}>Xonadon : {apartment}</p>
                </div>

                <div className="address_item" onClick={newAddressAdd}>
                    <div>
                        <input type="radio" name={'address'}/>
                        <h6 className={'address_title'}>Yangi yetkazib berish manzilini kiriting</h6>
                    </div>
                    <svg className={'plus_icon'}>
                        <use xlinkHref={svgRoot + '#menu_close'}/>
                    </svg>
                </div>

                {addAddressVis ?
                    <ForDeliveryTypeTemp/>
                    : ''
                }

            </div>
        }
    </div>

}

export default DeliveryType