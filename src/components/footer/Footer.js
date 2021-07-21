import logo from '../../images/logo/logo.svg'
import '../../style/footer/footer.scss'
import {Link} from "react-router-dom";

function Footer() {


    return <div className={'footer'}>

        <div className="container">

            <div className="footer_inner">

                <div className="footer_item">
                    <img src={logo} alt="Not found!" className={'logo'}/>
                    <p className={'right_reserved'}> Olcha store LLC 2017 © 2021. Barcha huquqlar himoyalangan</p>
                </div>

                <div className="footer_item">
                    <p className={'footer_link'}>Shaxsiy ma’lumotlar bilan ishlash siyosati</p>
                    <Link to={'/help'} className={'footer_link'}>Yordam</Link>
                    <p className={'footer_link'}>Muddatli to’lov shartlari</p>
                    <p className={'footer_link'}>Biz xaqimizda</p>
                </div>

                <div className="footer_item">
                    <p className={'footer_link'}> Ommaviy oferta</p>
                    <p className={'footer_link'}> Eco-friendly</p>
                    <Link to={'/compare'} className={'footer_link compare'}> Taqqoslash</Link>
                    <Link to={'/delivery'} className={'footer_link'}> To‘lov va yetkazib berish xizmati</Link>
                </div>

                <div className="footer_item">

                    <div className="footer_phone">
                        <span>Ishonch raqami</span>
                        <span><a href={'tel:+998971042969'}> +998 (71) 202-202-1 </a></span>
                    </div>

                </div>

            </div>

        </div>

    </div>

}

export default Footer