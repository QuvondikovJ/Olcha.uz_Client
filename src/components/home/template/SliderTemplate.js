import '../../../style/home/template/slider.scss'
import '../../../style/home/template/PrevAndNextForSlide.scss'
import star from '../../../svgIcons.svg'
import Slider from 'react-slick'
import {previous, next, sliderChange} from "./methodsForSlider";
import {useEffect, useRef, useState,} from "react";
import ProductItem from "./ProductItem";
import forSliderResponsiveMethod from "./ForSliderResponsiveMethod";
import useForceUpdate from "use-force-update";

function SliderTemplate({devices, blockTitle, slickSettings, spanPrev, spanNext, maxSlide}) {


    const slider = useRef()

    useEffect(() => {
        if (slider.current.innerSlider.state.currentSlide <= 1 && !slickSettings.infinite)
            document.getElementById(spanPrev).classList.add('disabled')
    }, [])


    // const forceUpdate = useForceUpdate()
    // window.onresize = changeSizeWindow


    // window.onresize = changeSizeWindow
    //
    // function changeSizeWindow() {
    //     // forceUpdate()
    //     console.log('dddd')
    //     if (window.innerWidth > 1230) {
    //         setSlickSettings(forSliderResponsiveMethod(slickSettings, 220))
    //     } else setSlickSettings(forSliderResponsiveMethod(slickSettings, 180))
    // }




    useEffect(() => {
       // forceUpdate()
        if (slickSettings.infinite) {
            setTimeout(() => {
                slider.current.slickGoTo(slickSettings.initialSlide)
            }, 500)
        }
    }, [slickSettings]);


    function slickChange() {
        sliderChange(slider, slickSettings, spanPrev, spanNext, maxSlide)
    }

    function prevClicked() {
        previous(slider, slickSettings, spanPrev, spanNext, maxSlide)
    }

    function nextClicked() {
        let newMaxslide = parseInt(maxSlide)
        next(slider, slickSettings, spanPrev, spanNext, newMaxslide)
    }


    return <div className={'slider_template'}>

        <h2 className={'title'}>{blockTitle}</h2>

        {/* Slider */}
        <div className="slider">

            {/* Slider item */}
            <Slider {...slickSettings} ref={slider}>
                {devices.map((item, index) =>
                    <div className="slider_item" key={index} onClickCapture={slickChange}>

                        <ProductItem item={item}/>
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

}

export default SliderTemplate