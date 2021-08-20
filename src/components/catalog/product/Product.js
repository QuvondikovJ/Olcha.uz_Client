import {Link} from "react-router-dom";
import phone from '../../../images/home/phone.jpeg'
import ear_phone from '../../../images/home/ear_phone.png'
import carwash from '../../../images/home/carwash.png'
import smartPhone from '../../../images/home/smartPhone.jpeg'
import avto from '../../../images/home/avto_jihoz.png'
import svgRoot from '../../../svgIcons.svg'
import {useEffect, useRef, useState} from "react";
import forSliderResponsiveMethod from "../../home/template/ForSliderResponsiveMethod";
import $ from 'jquery'
import '../../../style/catalog/product/product.scss'
import SliderTemplate from "../../home/template/SliderTemplate";
import Comment from "./Comment";
import useForceUpdate from "use-force-update";
import {editGoToBasket} from "../../../redux/reducers/GoToBasketReducer";
import {useDispatch} from "react-redux";

function Product() {

    const photos = [
        phone, avto, smartPhone, carwash, ear_phone
    ]

    const productName = 'Blackview A70 3/32GB Blue'

    const characteristic = [
        {
            department: 'Umumiy ma’lumot',
            values: [
                {
                    name: 'Barmoq izi',
                    value: 'Mavjud'
                },
                {
                    name: 'SIM-karta turi va soni',
                    value: '2 (Nano Sim)'
                },
                {
                    name: 'Operatsion sistema versiyasi',
                    value: 'Android 11'
                },
                {
                    name: 'Vazni',
                    value: '205 g (7.23 oz)'
                },
                {
                    name: 'O‘lchami',
                    value: '77.5x165.3x8.3 mm'
                }
            ]
        },
        {
            department: 'Aloqa',
            values: [
                {
                    name: 'Wi-Fi',
                    value: 'Wi-Fi 802.11n'
                },
                {
                    name: 'Bluetooth',
                    value: '4.2'
                },
                {
                    name: 'Standart',
                    value: 'GSM 900/1800/1900, 3G, 4G LTE'
                },
                {
                    name: 'Sputnikli navigatsiya',
                    value: 'GLONASS, GPS'
                },


            ]
        },
        {
            department: 'Xotira va protsessor',
            values: [
                {
                    name: 'Tezkor xotira hajmi',
                    value: '3 GB'
                },
                {
                    name: 'Xotira kartasi uchun bo’linma',
                    value: 'Mavjud, 256 GBga qadar'
                },
                {
                    name: 'Doimiy xotira hajmi',
                    value: '32GB'
                },
                {
                    name: 'Protsessor yadrolari soni',
                    value: '8'
                },
                {
                    name: 'Protsessor',
                    value: 'Spreadtrum SC9863'
                }
            ]
        }
    ]

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5.5,
        initialSlide: .5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 300,
        autoplaySpeed: 1500,
        cssEase: "linear",
        swipeToSlide: true,
        arrows: false,
    };

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

    ]
    const colors = ['Black', 'Red', 'Green', 'White']
    const [slickSettings, setSlickSettings] = useState(settings)
    const [currentImg, setCurrentImg] = useState(0)
    const direct_block = useRef()

    const dispatch = useDispatch()

    /*  When buy btn clicked, so this function works  */
    function buyBtnClicked() {
        $('html').addClass('disabled')
        dispatch(editGoToBasket(true))
    }


    function imgClicked(imgIndex) {
        let directBlock = document.querySelector('#direct_block.active')
        if (directBlock === null) {
            if (imgIndex === 0) {
                $('#prev').addClass('disabled')
                $('#next').removeClass('disabled')
            } else if (imgIndex === photos.length) {
                $('#next').addClass('disabled')
                $('#prev').removeClass('disabled')
            } else {
                $('#prev').removeClass('disabled')
                $('#next').removeClass('disabled')
            }
            setTimeout(() => {
                let img = $('#img_' + imgIndex)
                $('html').toggleClass('disabled')
                img.toggleClass('active')
                resizeWidthTemplateForImg(img)
                $('#direct_block').toggleClass('active')
                setCurrentImg(imgIndex)
            }, 100)

        }

    }

    function prevClicked() {
        if (currentImg > 0) {
            if (currentImg === 1) {
                $('#prev').addClass('disabled')
            }
            let newCurrentImg = $('#img_' + (currentImg - 1))
            newCurrentImg.addClass('active')
            resizeWidthTemplateForImg(newCurrentImg)
            $('#img_' + currentImg).removeClass('active')
            $('#img_' + currentImg).css({'transform': 'translate3d(0,0,0', 'width': '100%', 'height': 'auto'})
            $('#next').removeClass('disabled')
            setCurrentImg(currentImg - 1)
        }
    }


    function resizeWidthTemplateForImg(newCurrentImg) {
        if (window.innerWidth > 770) {
            newCurrentImg.css('transform', 'translate3d(' + ((window.innerWidth - 600) / 2 - newCurrentImg.offset().left) + 'px, ' + ($(window).scrollTop() - newCurrentImg.offset().top + 60) + 'px, 0')
        } else if (window.innerWidth > 480) {
            newCurrentImg.css('transform', 'translate3d(' + ((window.innerWidth - 480) / 2 - newCurrentImg.offset().left) + 'px, ' + ($(window).scrollTop() - newCurrentImg.offset().top + 60) + 'px, 0')
        } else {
            newCurrentImg.css({
                'transform': 'translate3d(' + (-newCurrentImg.offset().left) + 'px, ' + ($(window).scrollTop() - newCurrentImg.offset().top + (window.innerHeight - window.innerWidth) / 2) + 'px, 0',
                'max-width': window.innerWidth + 'px', 'max-height': window.innerWidth + 'px'
            })
        }
    }

    function nextClicked() {
        if (currentImg < photos.length) {
            if (currentImg === photos.length - 1) {
                $('#next').addClass('disabled')
            }
            let newCurrentImg = $('#img_' + (currentImg + 1))
            newCurrentImg.addClass('active')
            resizeWidthTemplateForImg(newCurrentImg)
            $('#img_' + currentImg).removeClass('active')
            $('#img_' + currentImg).css({'transform': 'translate3d(0,0,0', 'width': '100%', 'height': 'auto'})
            $('#prev').removeClass('disabled')
            setCurrentImg(currentImg + 1)
        }
    }

    useEffect(() => {
        window.addEventListener('click', handleClick)
    }, [])

    function handleClick(event) {
        let prev = document.querySelector('#prev')
        let next = document.querySelector('#next')
        let directBlock = document.querySelector('#direct_block.active')
        let check = event.path.includes(prev) || event.path.includes(next)
        if (!check && directBlock) {
            $('.photo_block .invisible_img').removeClass('active')
            $('#img_0').removeClass('active')
            $('html').removeClass('disabled')
            $('#direct_block').removeClass('active')
            $('#img_0').css({'transform': 'translate3d(0,0,0', 'width': '100%', 'height': 'auto'})
            $('.photo_block .invisible_img').css({'transform': 'translate3d(0,0,0', 'width': '100%', 'height': 'auto'})
        }
    }

    const forceUpdate = useForceUpdate()
    window.onresize = changeSizeWindow

    function changeSizeWindow() {
        forceUpdate()
        if (window.innerWidth > 1230) {
            setSlickSettings(forSliderResponsiveMethod(slickSettings, 220))
        } else setSlickSettings(forSliderResponsiveMethod(slickSettings, 180))
    }

    useEffect(() => {
        changeSizeWindow()
        window.addEventListener('click', handleClickForGoToBasket)
    }, [])


    function handleClickForGoToBasket(event) {
        /* For go to basket from product    */
        let goToBasket = document.querySelector('#go_to_basket_comp')
        let buyBtn = document.querySelector('#buy_btn')
        let check = event.path.includes(goToBasket) || event.path.includes(buyBtn)
        if (!check) {
            $('html').removeClass('disabled')
            dispatch(editGoToBasket(false))
        }
    }


    return <div className={'product_comp'}>
        <div className="container" id={'container'}>

            <div className="path">
                <Link to={'/'}>Bosh sahifa </Link>
                <span>/</span>
                <Link to={'/cabinet'}>Kabinet</Link>
                <span>/</span>
                <Link to={'/cabinet/orders'}>Product</Link>
            </div>


            <div className="product_inner">

                <div className="row">
                    <div className="col-md-6">
                        {/*  First product item  */}
                        <div className="product_item">
                            <div className={'secondary_photos'}>
                                {photos.map((item, index) =>
                                    <div className={'photo_block'} key={index}>
                                        <img src={item} alt="Photo not found!"/>
                                        <img src={item} alt="Photo not found!" className={'invisible_img'}
                                             id={'img_' + (index + 1)} onClick={() => imgClicked(index + 1)}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="main_photo" onClick={() => imgClicked(0)}>
                                <img src={photos[0]} alt="Photo not found!"/>
                                <img src={photos[0]} alt="Photo not found!" className={'invisible_img_main'}
                                     id={'img_0'}/>
                            </div>

                            <div className="direct_block" id={'direct_block'} ref={direct_block}>
                                <span onClick={prevClicked} id={'prev'}>
                                    <svg className={'prev_icon'}>
                                        <use xlinkHref={svgRoot + '#left'}/>
                                    </svg>
                                </span>
                                <span onClick={nextClicked} id={'next'}>
                                    <svg className={'next_icon'}>
                                        <use xlinkHref={svgRoot + '#left'}/>
                                    </svg>
                                </span>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-6">
                        {/*  Second product item  */}
                        <div className="product_item">
                            <Link className="product_manufacturer">Xiaomi</Link>
                            <h1 className={'product_name'}>Blackview A70 3/32GB Blue</h1>

                            {/* Rating block */}
                            <div className="rating_block">
                                <div className="rating_block_item">
                                    <svg className={'rating_icon'}>
                                        <use xlinkHref={svgRoot + '#star'}/>
                                    </svg>
                                    <svg className={'rating_icon'}>
                                        <use xlinkHref={svgRoot + '#star'}/>
                                    </svg>
                                    <svg className={'rating_icon'}>
                                        <use xlinkHref={svgRoot + '#star'}/>
                                    </svg>
                                    <svg className={'rating_icon'}>
                                        <use xlinkHref={svgRoot + '#star'}/>
                                    </svg>
                                    <svg className={'rating_icon'}>
                                        <use xlinkHref={svgRoot + '#star'}/>
                                    </svg>

                                    <span>Sharhlar (0)</span>
                                </div>

                                <Link className="rating_block_item">
                                    <svg className={'rating_icon'}>
                                        <use xlinkHref={svgRoot + '#empty_heart'}/>
                                    </svg>
                                    <span>Tanlangan</span>
                                </Link>

                                <Link className={'rating_block_item'}>
                                    <svg className={'rating_icon'}>
                                        <use xlinkHref={svgRoot + '#open_book'}/>
                                    </svg>
                                    <span>Taqqoslash</span>
                                </Link>
                            </div>

                            <hr className={'hr'}/>

                            <div className="faster_delivery">
                                <span>
                                <svg className={'delivery_icon'}>
                                    <use xlinkHref={svgRoot + '#delivery'}/>
                                </svg>
                                    </span>
                                <span>Быстрая доставка</span>
                            </div>

                            <h2 className={'brief_information'}>Qisqacha ma'lumot </h2>

                            <p className="brief_characteristic">Kafolat muddati (oy): 12</p>
                            <p className="brief_characteristic">Operatsion sistema versiyasi: Android 11</p>
                            <p className="brief_characteristic">Doimiy xotira hajmi: 32GB</p>

                            <p className="about_delivery">
                                Siz {productName} sotib olish uchun nafaqat Toshkent, balki Andijon, Buxoro,
                                Farg'ona, Jizzax, Xorazm, Namangan, Navoiy, Qashqadaryo, Qoraqalpog'iston Respublikasi,
                                Samarqand, Sirdaryo, Surxondaryo, Toshkent viloyatidan buyurtma berishingiz mumkin. Siz
                                :brend
                                muddatli to'lovga sotib olishingiz mumkin. {productName} Blue kreditga olib nima
                                qilasiz,
                                bo'lib to'lashga olish osonroq va tezroq bo'lsa? O'zbekiston bo'ylab juda tez yetkazib
                                beramiz.
                            </p>

                            {/*  If product has more than one color, so this block works*/}
                            <div className="color_block">
                                <p className="color_title">Rangi</p>
                                <div className="color_content">
                                {colors.map((item, index) =>
                                    <button className={'color_item'} key={index}>
                                        {item}
                                    </button>
                                )}
                                </div>
                            </div>


                            {/*  If product has gift, so this block works */}
                            <div className="gift_block">
                                <div className={'gift_header'}>
                                    <span>+</span>
                                    <span>Sovg'aga</span>
                                    <span>(Soni cheklangan)</span>
                                </div>
                                <div className="gift_content">
                                    <img src={phone} alt="Photo not found!"/>
                                    <div>
                                        <p className={'gift_name'}>Olcha.uz dan sovg'a Quloqchin</p>
                                        <p className={'gift_price'}>50 000 so'm</p>
                                    </div>
                                </div>

                            </div>


                            <h4 className={'product_price'}>1 429 000 so‘m</h4>
                            <div className="product_installment">
                                <span>139000 so‘m/oy</span>
                                <span data-original-title={'Kabinetingizda shaxsiy ma’lumotlarni kiriting'}> muddatli to’lovga</span>
                                <span>
                             <svg className={'info_icon'}>
                                 <use xlinkHref={svgRoot + '#info'}/>
                             </svg>
                            </span>
                            </div>

                            <div className="btn_block">
                                <button className="buy_btn" onClick={buyBtnClicked} id={'buy_btn'}>Sotib olish</button>
                                <button className="installment_btn">Bo'lib to'lash</button>
                                <button className="buy_one_click">Bir bosishda sotib oling</button>
                            </div>

                            <div className="delivery_text">
                                <svg className={'check_icon'}>
                                    <use xlinkHref={svgRoot + '#check'}/>
                                </svg>
                                <span>O’zbekiston bo’ylab yetkazib berish</span>
                            </div>

                        </div>
                    </div>
                </div>

                {/*  Characteristic block   */}
                <div className="characteristic_block">
                    <h3 className="title">Xarakter va tavsif</h3>

                    {characteristic.map((item, index) =>
                        <div key={index}>
                            <h2 className={'department_name'}>{item.department}</h2>
                            {item.values.map((item2, index2) =>
                                <div className={'characteristic_values'} key={index2}>
                                    <span>{item2.name}</span>
                                    <span/>
                                    <span>{item2.value}</span>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/*Comment block  */}
                <Comment/>

                {/*  New products block  */}
                <div className="new_products_block">
                    <SliderTemplate devices={devices} blockTitle={'Yangi mahsulotlar'}
                                    slickSettings={slickSettings} maxSlide={null} spanNext={null} spanPrev={null}/>

                </div>
            </div>

        </div>
    </div>

}

export default Product