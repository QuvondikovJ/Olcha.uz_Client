import '../../../style/home/template/slider.scss'
import '../../../style/home/template/PrevAndNextForSlide.scss'
import star from '../../../svgIcons.svg'
import Slider from 'react-slick'
import {previous, next, sliderChange} from "./methodsForSlider";
import {useEffect, useRef, useState,} from "react";

function SliderTemplate({devices, blockTitle, slickSettings, spanPrev, spanNext, maxSlide}) {


    const slider = useRef()

    useEffect(() => {
        if (slider.current.innerSlider.state.currentSlide <= 1 && !slickSettings.infinite)
            document.getElementById(spanPrev).classList.add('disabled')
    },[])


    useEffect(() => {
        if (slickSettings.infinite) {
            setTimeout(() => {
                slider.current.slickGoTo(slickSettings.initialSlide)
            }, 500)
        }
    }, []);


    function heartClicked(index) {

    }

    function slickChange(){
        sliderChange(slider, slickSettings, spanPrev, spanNext, maxSlide)
    }

    function prevClicked(){
        previous(slider,slickSettings, spanPrev, spanNext, maxSlide)
    }

    function nextClicked(){
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

                              <span className={'product_img'}>
                                  <img src={item.img} alt="Not found!"/>
                                  </span>
                        <a className={'product_category'}>{item.category}</a>
                        <a className={'product_name'}>{item.name}</a>
                        <p className={'star'}>

                            <svg className={'star_item'}>
                                <use xlinkHref={star + '#star'}></use>
                            </svg>
                            <svg className={'star_item'}>
                                <use xlinkHref={star + '#star'}></use>
                            </svg>
                            <svg className={'star_item'}>
                                <use xlinkHref={star + '#star'}></use>
                            </svg>
                            <svg className={'star_item'}>
                                <use xlinkHref={star + '#star'}></use>
                            </svg>
                            <svg className={'star_item'}>
                                <use xlinkHref={star + '#star'}></use>
                            </svg>

                        </p>

                        <p className={'rassrochka'}> {item.rassrochka}</p>
                        <p className={'discount'}> {item.discount}</p>
                        <p className={'price'}>{item.price}</p>

                        <span className={'heart'} onClick={() => heartClicked(index)}>
                        <i className="far fa-heart"> </i>
                            {/*<i className="fas fa-heart">  </i>*/}
                    </span>

                        <span className={'delivery'}>
                        <svg>
                            <use xlinkHref={star + '#delivery'}> </use>
                        </svg>
                    </span>

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