import '../../style/home/mostTopSlider.scss'
import '../../style/home/template/PrevAndNextForSlide.scss'
import avto_jihoz from '../../images/home/avto_jihoz.png'
import smart_watch from '../../images/home/smart_watch.png'
import atir_upa from '../../images/home/atir_upa.png'
import card_transfer from '../../images/home/card_transfer.png'
import freezer from '../../images/home/refrigator.png'
import ear_phone from '../../images/home/ear_phone.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import {useRef} from "react";

function MostTopSlider() {


    const slides = [
        {
            title: 'Avto jihozlar',
            text: 'Avtomobilingizga yangi nafas bering, butun O\'zbekiston bo\'ylab yetkazib beramiz.',
            img: avto_jihoz
        },
        {
            title: 'Atirlar muddatli to\'lovga',
            text: 'Barchasi asl "Original".',
            img: atir_upa
        },
        {
            title: 'Endi oylik to\'lovlarni istalgan usulda amalga oshirish mumkin',
            text: 'Endi muddatli to\'lovga xarid qilish uchun Uzcard, Humo va Unionpay Kobeydjing kartangiz bo\'lsa kifoya.',
            img: card_transfer
        },
        {
            title: 'Aqilli soatlarni unuting: Huawei qulay flagman brasletlarini taqdim etmoqda!',
            text: 'SpO21 doimiy monitoring, FullView ramkasiz ekran va Zaryad olmasdan 2 haftagacha ishlash tizimi.',
            img: smart_watch
        },
        {
            title: 'Xiaomi hayratda qoldirishda davom etmoqda',
            text: 'Airdots 3 minigarnituralari allaqachon sotuvda.',
            img: ear_phone
        }
    ]

    let settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 300,
        autoplaySpeed: 1500,
        cssEase: "linear",
        arrows: false
    };

    const slider = useRef()

    /* Next slide */
    function next() {
        slider.current.slickNext();
    }

    /* Prev slide */
    function previous() {
        slider.current.slickPrev();
    }

    return <div className={'most_top_slider'}>
        <div className="container">


            {/* Slider  */}
            <div className="slider">

                {/* Slider_item  */}
                <Slider ref={slider}  {...settings}>
                    {slides.map((item, index) =>
                        <div>
                            <div className="slider_item" key={index}>
                                <img src={item.img} alt="Not Found!"/>
                                <div className="about_technic">
                                    <h2 className={'slider_title'}>{item.title}</h2>
                                    <p className={'slider_text'}>
                                        {item.text}
                                    </p>
                                    <button className={'btn btn-outline-dark slider_btn'}>
                                        Sotib olish
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </Slider>

                <span className={'prev'} onClick={previous}>
                    <i className="fas fa-chevron-left"> </i>
                </span>
                <span className={'next'} onClick={next}>
               <i className="fas fa-chevron-right"> </i>
                </span>

            </div>


            {/* Fast selling product */}
            <div className="fast_selling">

                <h2 className={'title'}>Konditsionerlar</h2>
                <p className={'text'}> Konditsionerlar muddatli to'lovga eng yashi narxlarda</p>
                <img src={freezer} alt="Not found!"/>
                <button className={'btn btn-outline-light'}>Batafsil</button>

            </div>
        </div>
    </div>

}

export default MostTopSlider
