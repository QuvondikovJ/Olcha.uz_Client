import {Link} from "react-router-dom";
import '../../style/templatePath/path.scss'
import svgRoot from '../../svgIcons.svg'
import '../../style/header/selectedProducts/emptySelectedProducts.scss'
function EmptySelectedProducts() {

    return <div className={'empty_selected_products'}>
        <div className="container">

            <div className="path">
                <Link to={'/'}>Bosh sahifa</Link>
                <span>/</span>
                <Link to={'/selectedProducts'}>Tanlanganlar</Link>
            </div>

            <h2 className="selected_title">
                Tanlanganlar
            </h2>

            <div className="selected_block">

                <svg className={'heart_icon'}>
                    <use xlinkHref={svgRoot + '#heart'}></use>
                </svg>

                <h3 className="title">
                    Tanlangan mahsulotlaringiz yo'qmi ? Bu muammo emas!
                </h3>

                <p className="text">
                    Bizning keng assortimentga ega katalogalarimizdan o’z mahsulotingizni tanlang.
                </p>

                <Link to={'/'}>
                    <button className="selected_btn btn btn-danger">Xaridni boshlash</button>
                </Link>
            </div>

        </div>
    </div>

}

export default EmptySelectedProducts