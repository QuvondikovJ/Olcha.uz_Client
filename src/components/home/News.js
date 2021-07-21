import '../../style/home/news.scss'
import '../../style/home/template/PrevAndNextForSlide.scss'
import Slider from 'react-slick'
import {useEffect, useRef, useState} from "react";
import {next, previous, sliderChange} from "./template/methodsForSlider";
import bg from '../../images/home/bg_img.png'
import forSliderResponsiveMethod from "./template/ForSliderResponsiveMethod";

function News() {

    const news = [
        {
            title: 'Tarmoq videoda e\'lon qilinmagan Galaxy M32-ni ochdi',
            date: '18-06-2021'
        },
        {
            title: 'Tarmoq videoda e\'lon qilinmagan Galaxy M32-ni ochdi',
            date: '18-06-2021'
        },
        {
            title: 'Tarmoq videoda e\'lon qilinmagan Galaxy M32-ni ochdi',
            date: '18-06-2021'
        },
        {
            title: 'Tarmoq videoda e\'lon qilinmagan Galaxy M32-ni ochdi',
            date: '18-06-2021'
        },
        {
            title: 'Tarmoq videoda e\'lon qilinmagan Galaxy M32-ni ochdi',
            date: '18-06-2021'
        },
        {
            title: 'Tarmoq videoda e\'lon qilinmagan Galaxy M32-ni ochdi',
            date: '18-06-2021'
        },
        {
            title: 'Tarmoq videoda e\'lon qilinmagan Galaxy M32-ni ochdi',
            date: '18-06-2021'
        },
        {
            title: 'Tarmoq videoda e\'lon qilinmagan Galaxy M32-ni ochdi',
            date: '18-06-2021'
        },
        {
            title: 'Tarmoq videoda e\'lon qilinmagan Galaxy M32-ni ochdi',
            date: '18-06-2021'
        },
        {
            title: 'Tarmoq videoda e\'lon qilinmagan Galaxy M32-ni ochdi',
            date: '18-06-2021'
        },

    ]

    const colors = ['#6d3687', '#0ea4d3', '#eb1537', '#6d3687', '#0ea4d3', '#eb1537', '#6d3687', '#0ea4d3', '#eb1537', '#0ea4d3',]

    const slider = useRef();

    const spanPrev = 'newsPrev'
    const spanNext = 'newsNext'

    let settings = {
        dots: false,
        infinite: true,
        initialSlide : .88,
        slidesToShow: 3.15,
        slidesToScroll: 1,
        autoplay: true,
        speed: 300,
        cssEase: "linear",
        autoplaySpeed: 1500,
        swipeToSlide: true,
        arrows: false,

    };


    const [slickSettings, setSlickSettings] = useState(settings)


    useEffect(() => {
        let containerWidth = document.getElementById('container').offsetWidth

        if (containerWidth < 540) {
            setSlickSettings(forSliderResponsiveMethod(slickSettings, 270))
        } else {
            setSlickSettings(forSliderResponsiveMethod(slickSettings, 320))
        }
        setTimeout(() => {
            slider.current.slickGoTo(slickSettings.initialSlide)
        }, 500)

    }, []);


    function slickChange() {
        sliderChange(slider, slickSettings, null, null, null)
    }

    function prevClicked() {
        previous(slider, slickSettings, null, null, null)
    }

    function nextClicked() {
        next(slider, slickSettings, null, null, null)
    }

    function changeBackground(index) {
        return {
            background: 'linear-gradient(to right,' + colors[index] + ', ' + colors[index] + ', ' + colors[index] + ', transparent)'
        }
    }

    return <div className={'news'}>
        <div className="container" id={'container'}>

            <div className="block_title">
                Yangiliklar
            </div>

            <div className="news_inner">
                <Slider ref={slider} {...slickSettings}>

                    {news.map((item, index) =>
                        <div className="news_item" key={index} onClickCapture={slickChange}>
                            <div className="news_title">
                                {item.title}
                            </div>

                            <p className={'news_date'}>
                                {item.date}
                            </p>
                            <span
                                style={changeBackground(index)} className={'bg_gradient'}>
                            </span>
                            <img src={bg} alt="Not found!" className={'news_img'}/>
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

export default News