import phone from '../../../images/home/phone.jpeg'
import {Link} from "react-router-dom";
import '../../../style/cabinet/order/orderTemplate.scss'

function OrderTemplate({category, name, count, price, id}) {


    return <div className="ordered_product_item">
        <Link to={'/product/id'}> <img src={phone} alt="Photo not found!" className={'product_img'}/>
        </Link>
        <Link to={'/category'} className="product_category">{category}</Link>
        <Link to={'/product/id'}>
            <p className="product_name">{name}</p>
        </Link>

        <div className="product_count"><span>Count : </span>{count}</div>

        <div className="product_price">{price} so'm</div>

    </div>


}

export default OrderTemplate