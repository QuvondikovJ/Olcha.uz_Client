import SliderTemplate from "./template/SliderTemplate";
import phone from '../../images/home/smartPhone.jpeg'
import '../../style/home/newProduct.scss'
import {useEffect, useState} from "react";
import forSliderResponsiveMethod from "./template/ForSliderResponsiveMethod";
import useForceUpdate from "use-force-update";
function NewProducts(){

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

    let settings = {
        dots: false,
        infinite: false,
        slidesToShow: 5.5,
        slidesToScroll: 1,
        speed: 100,
        cssEase: "linear",
        swipeToSlide: true,
        arrows: false,
    };



    const [slickSettings, setSlickSettings] = useState(settings)

    const forceUpdate = useForceUpdate()
    // window.onresize = changeSizeWindow
    //
    function changeSizeWindow() {
        if (window.innerWidth > 1230) {
            setSlickSettings(forSliderResponsiveMethod(slickSettings, 220))
        } else setSlickSettings(forSliderResponsiveMethod(slickSettings, 180))
    }


    useEffect(()=>{
        changeSizeWindow()
    },[])


    return <div className={'new_products'}>
<div className="container">



        <SliderTemplate slickSettings={slickSettings} blockTitle={'Yangi mahsulotlar'} devices={devices}
        spanPrev={'newProductsPrev'} spanNext={'newProductsNext'} maxSlide={10-slickSettings.slidesToShow}/>


</div>
    </div>

}

export default NewProducts