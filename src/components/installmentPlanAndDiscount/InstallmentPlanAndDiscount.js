import {Link} from "react-router-dom";
import svgRoot from '../../svgIcons.svg'
import ProductItem from "../home/template/ProductItem";
import phone from "../../images/home/phone.jpeg";
import Pagination from "../pagination/Pagination";
import {useRef, useState} from "react";
import '../../style/installmentPlan/installmentPlan.scss'
import $ from "jquery";

function InstallmentPlanAndDiscount() {

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
    const filterBtn = useRef()
    const installmentFirstItem = useRef()

    function filterBtnClicked() {
        $('html').addClass('disabled')
        $('#installment_first_item').addClass('active')
    }

    window.addEventListener('click', (event) => {
        let isExistsFirstItem = event.path.includes(installmentFirstItem.current)
        let isClickedFilterBtn = event.path.includes(filterBtn.current)
        if (!isExistsFirstItem && !isClickedFilterBtn) {
            $('html').removeClass('disabled');
            $('#installment_first_item').removeClass('active')
        }
    })


    return <div className={'installment_plan_comp'}>
        <div className="container">

            <div className="path">
                <Link to={'/'}>Bosh sahifa</Link>
                <span>/</span>
                <Link to={'/installment-plan'}>Muddatli to'lov</Link>
            </div>

            <button className="filter_btn" onClick={filterBtnClicked} ref={filterBtn}>
                <div>
                    <svg className={'filter_icon'}>
                        <use xlinkHref={svgRoot + '#filter'}/>
                    </svg>
                    <span>Filtrlash</span>
                </div>
            </button>

            <div className="installment_inner">

                {/*    First installment item     */}
                <div className="installment_item" id={'installment_first_item'}
                     ref={installmentFirstItem}>

                    {categories.map((item, index) =>
                        <div className={'category_block'} key={index}>
                            <div className="header_block">
                                <h4 className="grand_category_name">{item.title}</h4>
                                <svg className={'open_icon'}>
                                    <use xlinkHref={svgRoot + '#left'}/>
                                </svg>
                            </div>
                            {item.value.map((item2, index2) =>
                                <p className={'father_category_name'} key={index2}>{item2}</p>
                            )}
                        </div>
                    )}

                </div>

                {/*  Second installment item  */}

                <div className="installment_item">

                    <div className="installment_item_header">
                        <h1 className="title">Muddatli to'lov</h1>
                        <select className={'sort_product'}>
                            <option value="1">Yangilar</option>
                            <option value="2">Narxiga ko'ra</option>
                        </select>
                    </div>

                    <div className="installment_item_content">
                        {devices.map((item, index) =>
                            <div className={'product_block'}>
                                <ProductItem item={item} key={index}/>
                            </div>
                        )}
                    </div>


                    {/*  Bu yerda pagination bo'ladi */}
                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} amountPage={68}/>

                </div>


            </div>

        </div>
    </div>;

}

export default InstallmentPlanAndDiscount