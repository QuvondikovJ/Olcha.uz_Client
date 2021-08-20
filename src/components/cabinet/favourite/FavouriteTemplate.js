import phone from "../../../images/home/phone.jpeg";
import {Link} from "react-router-dom";
import svgRoot from '../../../svgIcons.svg'
import '../../../style/cabinet/favourite/favouriteTemplate.scss'

function FavouriteTemplate({category, name, price, id}) {

    function deleteClicked(id) {
        /* bu yerdan back enda shu id berib yuboriladi va shu id li mahsulot favourite table dan o'chirib
        * yuboriladi  */
    }

    return <div className="favourite_product_item">
        <Link to={'/product/id'}><img src={phone} alt="Photo not found!" className={'product_img'}/>
        </Link>

        <Link to={'/category'} className="product_category">{category}</Link>
        <Link to={'/product/id'}>
            <p className="product_name">{name}</p>
        </Link>

        <div className="product_price">{price} so'm</div>

        <div className="delete" onClick={() => deleteClicked(id)}>
            <svg className={'delete_icon'}>
                <use xlinkHref={svgRoot + '#delete'}></use>
            </svg>
            <span>Olib tashlash</span>
        </div>
    </div>

}

export default FavouriteTemplate