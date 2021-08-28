import {Link} from "react-router-dom";
import '../../style/templatePath/path.scss'
import svgRoot from '../../svgIcons.svg'
import '../../style/header/selectedProducts/emptySelectedProducts.scss'
import '../../style/cabinet/favourite/favouriteTemplate/emptyTemplateForFavourite.scss'
import {useState} from "react";

function EmptySelectedProducts() {

    const [isRegistered, setIsRegistered] = useState(false)

    return <div className={'empty_selected_products'}>
        <div className="container">

                <div>
                    <div className="path">
                        <Link to={'/'}>Bosh sahifa</Link>
                        <span>/</span>
                        <Link to={'/selectedProducts'}>Tanlanganlar</Link>
                    </div>

                    <div className="selected_block">

                        <svg className={'heart_icon'}>
                            <use xlinkHref={svgRoot + '#register_user'}></use>
                        </svg>

                        <h3 className="title">
                          Mahsulot tanlash uchun : tizimdan ro'yxatdan o'tishingiz lozim.
                        </h3>


                        <Link to={'/register'}>
                            <button className="selected_btn btn btn-danger">Ro'yxatdan o'tish</button>
                        </Link>
                    </div>
                </div>
        </div>
    </div>

}

export default EmptySelectedProducts