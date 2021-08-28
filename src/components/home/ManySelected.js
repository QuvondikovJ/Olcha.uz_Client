import '../../style/home/manySelected.scss'
import phone from '../../images/home/phone.jpeg'
import SliderTemplate from "./template/SliderTemplate";
import React, {useEffect, useState} from "react";
import forSliderResponsiveMethod from "./template/ForSliderResponsiveMethod";
import useForceUpdate from "use-force-update";

function ManySelected() {

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
        infinite: true,
        slidesToShow: 5.4,
        initialSlide: .6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 300,
        autoplaySpeed: 1500,
        cssEase: "linear",
        swipeToSlide: true,
        arrows: false,
    };


    const [slickSettings, setSlickSettings] = useState(settings)

    // const forceUpdate = useForceUpdate()
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

    return <div className={'many_selected'}>
        <div className="container" id={'container'}>


            <SliderTemplate devices={devices} blockTitle={'Ko\'p  tanlangan mahsulotlar'}
                            slickSettings={slickSettings}/>

        </div>
    </div>

}

export default ManySelected