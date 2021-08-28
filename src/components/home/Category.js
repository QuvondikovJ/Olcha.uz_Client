import '../../style/home/category.scss'
import '../../style/home/template/PrevAndNextForSlide.scss'
import carwash from '../../images/home/carwash.png'
import {previous, next, sliderChange} from "./template/methodsForSlider";
import Slider from 'react-slick'
import {useRef, useEffect, useState} from "react";
import forSliderResponsiveMethod from "./template/ForSliderResponsiveMethod";

function Category() {

    const categories = [
        ' Bolalar uchun o\'yinchoq va mahsulotlar',
        ' Mayishiy texnika',
        'Kitoblar',
        ' Bolalar uchun o\'yinchoq va mahsulotlar',
        ' Bolalar uchun o\'yinchoq va mahsulotlar',
        ' Bolalar uchun o\'yinchoq va mahsulotlar',
        ' Bolalar uchun o\'yinchoq va mahsulotlar',
        ' Bolalar uchun o\'yinchoq va mahsulotlar',
        ' Bolalar uchun o\'yinchoq va mahsulotlar',
        ' Bolalar uchun o\'yinchoq va mahsulotlar',
    ]

    const slider = useRef();

    const spanPrev = 'categoryPrev'
    const spanNext = 'categoryNext'

    let slickSettings = {
        dots: false,
        infinite: true,
        slidesToShow: 4.5,
        slidesToScroll: 1,
        initialSlide: .5,
        autoplay : true,
        speed: 300,
        autoplaySpeed : 1500,
        cssEase: "linear",
        swipeToSlide: true,
        arrows: false,
    };

    const [settings, setSettings] = useState(slickSettings)


    useEffect(() => {
        let containerWidth = document.getElementById('container').offsetWidth

        if (containerWidth < 730) {
            setSettings(forSliderResponsiveMethod(settings, 190))
        }else if (730 <= containerWidth && containerWidth < 1230) {
            setSettings(forSliderResponsiveMethod(settings, 240))
        }else {
            setSettings(forSliderResponsiveMethod(settings, 260))
        }

        setTimeout(() => {
            slider.current.slickGoTo(slickSettings.initialSlide)
        }, 500)

    }, []);


    function slickChange() {
        sliderChange(slider, settings, null, null, null)
    }

    function prevClicked() {
        previous(slider, settings, null, null, null)
    }

    function nextClicked() {
        next(slider, settings, null, null, null)
    }


    return <div className={'category_block'}>
         <div className="container" id={'container'}>

             <h2 className={'title'}>Kategoriyalar</h2>

             <div className="slider">

                 <Slider   {...settings} ref={slider}>

                     {categories.map((item, index) =>
                         <div className="slider_item" key={index} onClickCapture={slickChange}>

                             <div className={'category'}>
                                 <img src={carwash} alt="Not found!"/>
                                 <p className={'category_name'}>
                                     {item}
                                 </p>
                             </div>
                         </div>
                     )}

                 </Slider>


                 <span className={'prev'} onClick={prevClicked} id={spanPrev}>
                     <i className="fas fa-chevron-left"> </i>
                 </span>
                 <span className={'next'} onClick={nextClicked} id={spanNext}>
                <i className="fas fa-chevron-right"> </i>
                 </span>

             </div>

         </div>

    </div>


}

export default Category