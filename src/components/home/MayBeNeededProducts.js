import '../../style/home/mayBeNeededProducts.scss'
import SliderTemplate from './template/SliderTemplate'
import phone from "../../images/home/smartPhone.jpeg";
import {useEffect, useState} from "react";

function MayBeNeededProducts() {

    const devices = [
        {
            img: phone,
            category: ' Smartfonlar',
            name: 'Samsung Galaxy A01 Core 1/16GB, Black',
            rassrochka: ' 101000 so\'m/oy',
            discount: '1 100 000 so\'m',
            price: '1 038 000 so\'m'
        },
        {
            img: phone,
            category: ' Smartfonlar',
            name: 'Samsung Galaxy A01 Core 1/16GB, Black',
            rassrochka: ' 101000 so\'m/oy',
            discount: '1 100 000 so\'m',
            price: '1 038 000 so\'m'
        },
        {
            img: phone,
            category: ' Smartfonlar',
            name: 'Samsung Galaxy A01 Core 1/16GB, Black',
            rassrochka: ' 101000 so\'m/oy',
            discount: '1 100 000 so\'m',
            price: '1 038 000 so\'m'
        },
        {
            img: phone,
            category: ' Smartfonlar',
            name: 'Samsung Galaxy A01 Core 1/16GB, Black',
            rassrochka: ' 101000 so\'m/oy',
            discount: '1 100 000 so\'m',
            price: '1 038 000 so\'m'
        },
        {
            img: phone,
            category: ' Smartfonlar',
            name: 'Samsung Galaxy A01 Core 1/16GB, Black',
            rassrochka: ' 101000 so\'m/oy',
            discount: '1 100 000 so\'m',
            price: '1 038 000 so\'m'
        },
        {
            img: phone,
            category: ' Smartfonlar',
            name: 'Samsung Galaxy A01 Core 1/16GB, Black',
            rassrochka: ' 101000 so\'m/oy',
            discount: '1 100 000 so\'m',
            price: '1 038 000 so\'m'
        },
        {
            img: phone,
            category: ' Smartfonlar',
            name: 'Samsung Galaxy A01 Core 1/16GB, Black',
            rassrochka: ' 101000 so\'m/oy',
            discount: '1 100 000 so\'m',
            price: '1 038 000 so\'m'
        },
        {
            img: phone,
            category: ' Smartfonlar',
            name: 'Samsung Galaxy A01 Core 1/16GB, Black',
            rassrochka: ' 101000 so\'m/oy',
            discount: '1 100 000 so\'m',
            price: '1 038 000 so\'m'
        },
        {
            img: phone,
            category: ' Smartfonlar',
            name: 'Samsung Galaxy A01 Core 1/16GB, Black',
            rassrochka: ' 101000 so\'m/oy',
            discount: '1 100 000 so\'m',
            price: '1 038 000 so\'m'
        },
        {
            img: phone,
            category: ' Smartfonlar',
            name: 'Samsung Galaxy A01 Core 1/16GB, Black',
            rassrochka: ' 101000 so\'m/oy',
            discount: '1 100 000 so\'m',
            price: '1 038 000 so\'m'
        },

    ]

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        speed: 100,
        cssEase: "linear",
        swipeToSlide: true,
        arrows: false,
    }


    const [slickSettings, setSlickSettings] = useState(settings)

    useEffect(() => {

        let containerWidth = document.getElementById('container').offsetWidth;
        let countSlide = (containerWidth - 30) / 190 * .66666
        if(containerWidth <= 540){
            countSlide = (containerWidth - 30) / 190
            slickSettings.slidesToShow = countSlide
        }else if (containerWidth < 1230) {
            slickSettings.slidesToShow = countSlide
        }
        setSlickSettings({...slickSettings})
    }, []);

    return <div className={'may_be_need'}>
        <div className="container">

            <div className="need">

                {/* First need item */}
                <div className="need_item">
                    <p className={'question'}>Nima uchun Olcha.uz?</p>

                    <div className="need_department">
                        <i className={'icon fa fa-truck fa-lg'}> </i>
                        Yetkazib berish
                    </div>
                    <div className="need_department">
                        <i className="icon fa fa-shield-alt  fa-lg"> </i>
                        Sifat kafolati
                    </div>
                    <div className="need_department">
                        <i className="icon fa fa-credit-card  fa-lg"> </i>
                        Oson to'lov
                    </div>
                    <div className="need_department">
                        <i className="icon fa fa-phone  fa-lg"> </i>
                        Qo'llab quvvatlash markazi
                    </div>
                    <div className="need_department">
                        <i className="icon fa fa-sync-alt  fa-lg"> </i>
                        Eco-friendly
                    </div>

                </div>

                {/* Second need item  */}
                <div className="need_item" id={'need_item'}>

                    <SliderTemplate devices={devices} blockTitle={'Sizga kerak bo\'lishi mumkin'}
                                    slickSettings={slickSettings}
                                    spanNext={'needNext'} spanPrev={'needPrev'}
                                    maxSlide={10 - slickSettings.slidesToShow}/>


                </div>


            </div>

        </div>
    </div>

}

export default MayBeNeededProducts