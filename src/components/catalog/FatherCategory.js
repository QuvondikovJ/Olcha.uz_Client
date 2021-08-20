import {Link} from "react-router-dom";
import phone from "../../images/home/phone.jpeg";
import ProductItem from "../home/template/ProductItem";
import svgRoot from '../../svgIcons.svg'
import '../../style/catalog/fatherCategory.scss'
import Pagination from "../pagination/Pagination";
import {useRef, useState} from "react";
import $ from 'jquery'

function FatherCategory() {

    const fatherFirstItem = useRef()
    const filterBtn = useRef()
    const categories = [
        {
            title: 'Ishlab chiqaruvchi',
            value: ['Apple', 'Asus', 'Galaxy', 'Acer', 'Lenovo', 'Xiaomi', 'Samsung']
        },
        {
            title: 'Vazni',
            value: ['1.2 kg', '2.3 kg', '0.6 kg', '2 kg', '1.8 kg', '1.25kg', '0.85 kg']
        },
        {
            title: 'Ekran',
            value: ['1.7``', '2.3``', '6.8``', '8.7``', '4.9``', '12.7``', '8.6``', '4.2``']
        },
        {
            title: 'childCategory',
            value: ['category_1', 'category_2', 'category_3', 'category_4', 'category_5', 'category_6', 'category_7', 'category_8']
        }
    ]

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

    function filterBtnClicked() {
        $('html').addClass('disabled')
        $('#father_first_child').addClass('active')
    }

    window.addEventListener('click', (event) => {
        let isExistsFirstItem = event.path.includes(fatherFirstItem.current)
        let isClickedFilterBtn = event.path.includes(filterBtn.current)
        if (!isExistsFirstItem && !isClickedFilterBtn) {
            $('html').removeClass('disabled');
            $('#father_first_child').removeClass('active')
        }
    })

    /*  If window width change : this function works  */
    function onChangeWindowWidth() {
        if (window.innerWidth > 770) {
            $('html').removeClass('disabled');
            $('#father_first_child').removeClass('active')
        }
    }

    window.onresize = onChangeWindowWidth


    return <div className={'father_category_comp'}>
        <div className="container">

            <div className="path">
                <Link to={'/'}>Bosh sahifa</Link>
                <span>/</span>
                <Link to={'/grandCategoryUrl'}>grandCategoryUrl</Link>
                <span>/</span>
                <Link to={'/fatherCategoryUrl'}>fatherCategoryUrl</Link>
            </div>

            <button className="filter_btn" onClick={filterBtnClicked} ref={filterBtn}>
                <div>
                    <svg className={'filter_icon'}>
                        <use xlinkHref={svgRoot + '#filter'}/>
                    </svg>
                    <span>Filtrlash</span>
                </div>
            </button>

            <div className="father_inner">

                {/* First father item */}
                <div className="father_item" id={'father_first_child'} ref={fatherFirstItem}>

                    {/*  Agar bu category ning bola categorysi brand bo'lmasdan xaqiqiy category bo'lsa bu yerda
                    shu category larni ro'yxati turadi aks xolda bu block ko'rinmaydi.  Bu component child
                    category uchun xam ochiladi lekin child category uchun ochilganda bu component bu block ko'rinmaydigan qilamiz */}
                    <div className=" category_block child_category_list">
                        <div className="title_block active">
                            <h4 className="title">Kategoryiyalar</h4>
                            <svg className={'open_icon'}>
                                <use xlinkHref={svgRoot + '#left'}/>
                            </svg>
                        </div>
                        {categories.map((item, index) =>
                            item.title === 'childCategory' &&
                            item.value.map((item2, index2) =>
                                <Link className={'category_name'} to={'#'} key={index2}>{item2}</Link>
                            )
                        )}
                    </div>


                    {/* For Production*/}
                    <div className="category_block">
                        <div className="title_block active">
                            <h4 className="title">Ishlab chiqaruvchi</h4>
                            <svg className={'open_icon'}>
                                <use xlinkHref={svgRoot + '#left'}/>
                            </svg>
                        </div>
                        {categories.map((item, index) =>
                            item.title === 'Ishlab chiqaruvchi' &&
                            item.value.map((item2, index2) =>
                                <div className="category_input" key={index2}>
                                    <div>
                                        <input type="checkbox" id={'production_' + index2}/>
                                        <label htmlFor={'production_' + index2}> {item2}</label>
                                    </div>
                                </div>
                            )
                        )}
                    </div>

                    {/* For enter price */}
                    <div className="category_block price">
                        <div className="title_block active">
                            <h4 className="title">Narx</h4>
                            <svg className={'open_icon'}>
                                <use xlinkHref={svgRoot + '#left'}/>
                            </svg>
                        </div>
                        {/* bu yerda shu categorydagi eng arzon maxsulotni narxi va eng qimmat maxsolotni narxi
                        inputni place holderi bo'lib kiritiladi va shu oraliqdagi price larni bu inoutga kiritish mumkin bo'ladi*/}
                        <div className={'price_inner'}>
                            <div>
                                <label htmlFor={'from'}>Dan</label>
                                <input type={'text'} placeholder={'0'} id={'from'}/>
                            </div>
                            <div>
                                <label htmlFor={'to'}>Qadar</label>
                                <input type={'text'} placeholder={'9500'} id={'to'}/>
                            </div>
                        </div>
                    </div>

                    {/*  For addition characteristics   */}
                    {categories.map((item, index) =>
                        item.title !== 'Ishlab chiqaruvchi' &&
                        <div className={'category_block'}>
                            <div className="title_block">
                                <h4 className="title">{item.title}</h4>
                                <svg className={'open_icon'}>
                                    <use xlinkHref={svgRoot + '#left'}/>
                                </svg>
                            </div>
                            <div className="category_btn_block">
                                {item.value.map((item2, index2) =>
                                    <button className={'category_btn'} key={index2}>
                                        {item2}
                                    </button>
                                )}
                            </div>
                        </div>
                    )}

                    {/*  For block which name of block is besides */}
                    <div className="category_block besides ">
                        <div className="title_block active">
                            <h4 className="title">Bundan tashqari</h4>
                            <svg className={'open_icon'}>
                                <use xlinkHref={svgRoot + '#left'}/>
                            </svg>
                        </div>
                        <div className="category_input">
                            <div>
                                <input type="checkbox" id={'new'}/>
                                <label htmlFor={'new'}> Yangilar</label>
                            </div>
                            <div>
                                <input type="checkbox" id={'discount'}/>
                                <label htmlFor={'discount'}>Chegirma bilan</label>
                            </div>
                        </div>
                    </div>

                    <button className="cancel_filter">
                        Filterni bekor qilish
                    </button>


                </div>


                {/* Second father item   */}
                <div className="father_item">
                    <select className={'sort_product'}>
                        <option value="1">Yangilar</option>
                        <option value="2">Narxiga ko'ra</option>
                    </select>

                    <div className="father_inner_item">

                        {devices.map((item, index) =>
                            <div className={'product_block'}>
                                <ProductItem item={item}/>
                            </div>
                        )}
                    </div>

                    {/*  Bu yerda pagination bo'ladi */}
                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} amountPage={68}/>

                    <div className="father_footer">
                        <p className="text_1">
                            Noutbuk - bu displey, klaviatura va elektronikani birlashtirgan ko'chma
                            kompyuter. Bunday qurilmalar birinchi navbatda sayohat paytida foydalanishga mo'ljallangan.
                            Sizga Apple, Acer, Asus, HP, Lenovo, Dell, MSI, GigaByte, Dream Machines, Olcha.uz dan notubuki
                            taqdim etamiz va butun O'zbekiston bo'ylab etkazib beramiz.
                            Bizning internet do‘konda Siz Arzon va sifatli Noutbuklar sotib olish uchun nafaqat
                            Toshkentdan turib, balki Andijon, Buxoro, Farg‘ona, Jizzax, Xorazm, Namangan, Navoi,
                            Qashqadaryo, Qoraqalpog‘iston Respublikasi, Samarqand, Sirdaryo, Surxandaryo, Toshkent
                            viloyatidan bo‘yurtma berishingiz mumkin. Noutbuklar muddatli to‘lovga butun O‘zbekiston
                            bo‘yicha beriladi. Noutbuklar kreditga emas bo‘lib to‘lashga olish eng optimal yechim
                            xisoblanadi. Tez yetkazib beramiz.</p>

                        <p className="text_2">
                            Bizning internet do‘konda Siz Arzon va sifatli Noutbuklar sotib olish uchun nafaqat
                            Toshkentdan turib, balki Andijon, Buxoro, Farg‘ona, Jizzax, Xorazm, Namangan, Navoi,
                            Qashqadaryo, Qoraqalpog‘iston Respublikasi, Samarqand, Sirdaryo, Surxandaryo, Toshkent
                            viloyatidan bo‘yurtma berishingiz mumkin. Noutbuklar muddatli to‘lovga butun O‘zbekiston
                            bo‘yicha beriladi. Noutbuklar kreditga emas bo‘lib to‘lashga olish eng optimal yechim
                            xisoblanadi. Tez yetkazib beramiz.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    </div>

}

export default FatherCategory