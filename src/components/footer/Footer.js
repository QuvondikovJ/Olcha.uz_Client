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
                    <Link to={'/return-and-exchange'} className={'footer_link'}>Muddatli to’lov shartlari</Link>
                    <Link to={'/about-us'}  className={'footer_link'}>Biz xaqimizda</Link>
                </div>

                <div className="footer_item">
                    <Link to={'/public-offer'} className={'footer_link'}> Ommaviy oferta</Link>
                    <Link to={'/eco-friendly'} className={'footer_link'}> Eco-friendly</Link>
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