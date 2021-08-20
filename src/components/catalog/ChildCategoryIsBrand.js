import ProductItem from "../home/template/ProductItem";
import phone from "../../images/home/phone.jpeg";
import {useEffect, useRef, useState} from "react";
import Pagination from "../pagination/Pagination";
import photo from '../../images/home/phone.jpeg'
import Slider from 'react-slick'
import '../../style/catalog/childCategoryIsBrand.scss'
import {next, previous, sliderChange} from "../home/template/methodsForSlider";
import forSliderResponsiveMethod from "../home/template/ForSliderResponsiveMethod";
import $ from 'jquery'

function ChildCategoryIsBrand() {


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
    const [currentPage, setCurrentPage] = useState(1)

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

const fatherCategoryList = [
    {
        img : photo,
        categoryName : 'Smartphone'
    },
     {
        img : photo,
        categoryName : 'Noutbook'
    },
     {
        img : photo,
        categoryName : 'Fridge'
    },

     {
        img : photo,
        categoryName : 'Smartphone'
    },
     {
        img : photo,
        categoryName : 'Noutbook'
    },
     {
        img : photo,
        categoryName : 'Fridge'
    },

     {
        img : photo,
        categoryName : 'Smartphone'
    },
     {
        img : photo,
        categoryName : 'Noutbook'
    },
     {
        img : photo,
        categoryName : 'Fridge'
    },


]

    const slider = useRef();

const [slickSettings, setSlickSettings] = useState(settings)

    useEffect(() => {
       window.innerWidth > 500 ? setSlickSettings(forSliderResponsiveMethod(slickSettings, 220))
           : setSlickSettings(forSliderResponsiveMethod(slickSettings, 180))
    }, []);

    useEffect(() => {
        if (slickSettings.infinite && fatherCategoryList.length > 5) {
            setTimeout(() => {
                slider.current.slickGoTo(slickSettings.initialSlide)
            }, 500)
        }else {
            $('#father_category_list').addClass('active')
        }
    }, []);

    useEffect(()=>{
        /* Bu yerda agar grand category ni bola categorylari soni 6 tadan kam bo'ladigan bo'lsa
        * Slider ni settings iga slidesToShow qiymatiga father categorylarni sonini berishimiz kerak bo'ladi*/
    },[])

    function prevClicked(){
        previous(slider,slickSettings, null, null, null)
    }

    function nextClicked(){
        next(slider, slickSettings, null, null, null)
    }
    return <div className={'brand_comp'}>
        <div className="container" id={'container'}>

            <h1 className="title">Apple Smartfonlar</h1>

            <p className="text">Siz Apple Smartfonlar maxsulotini rasmiy kafolat bilan nafaqat Toshkent shaxri bo‘yicha,
                balki Andijon, Buxoro, Farg‘ona, Jizzax, Xorazm, Namangan, Navoi, Qashqadaryo, Qoraqalpog‘iston
                Respublikasi, Samarqand, Sirdaryo, Surxandaryo, Toshkent viloyati bo‘ylab sotib oling. Apple Smartfonlar
                muddatli to‘lovga Sizga ancha arzon narxlarda taklif etamiz. Apple Smartfonlar kreditga olgandan ko‘ra
                bo'lib to‘lashga olish tez va qulay. O‘zbekiston bo‘ylab juda tez yetkazib beramiz.</p>

            {/* Bu yerda shu categoryni eng bobo category siga kiruvchi father categorylarni img va category name i chiziladi
              slider bo'lib chiziladi , agar grand category ni bola categorylari soni(yani father categorylar soni) 5 tadan kam
               bolsa bu larni slider qilmasdan shunchaki o'zini chizib qo'yamiz*/}
            {fatherCategoryList.length > 5 ?
                <div className="father_category_list">
                    <Slider {...slickSettings} ref={slider}>
                        {fatherCategoryList.map((item, index) =>
                            <div className="father_category_block">
                                <img src={item.img} alt="Photo not found!"/>
                                <p className="category_name">{item.categoryName}</p>
                            </div>
                        )}
                    </Slider>

                    <span className={'prev'} onClick={prevClicked}>
                    <i className="fas fa-chevron-left"> </i>
                </span>
                    <span className={'next'} onClick={nextClicked}>
               <i className="fas fa-chevron-right"> </i>
                </span>

                </div>
                :
                <div className={'father_category_list'} id={'father_category_list'}>
                    {fatherCategoryList.map((item, index) =>
                        <div className="father_category_block">
                            <img src={item.img} alt="Photo not found!"/>
                            <p className="category_name">{item.categoryName}</p>
                        </div>
                    )}
                </div>
            }



            <div className="brand_block">
                {devices.map((item,index)=>
                <div className="product_block" key={index}>
                    <ProductItem item={item}/>
                </div>
                )}
            </div>


            <Pagination  currentPage={currentPage} setCurrentPage={setCurrentPage} amountPage={18}/>



        </div>
    </div>

}

export default ChildCategoryIsBrand