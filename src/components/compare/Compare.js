import svgRoot from '../../svgIcons.svg'
import {Link} from "react-router-dom";
import '../../style/templatePath/path.scss'
import '../../style/header/compare/compare.scss'
import phone from '../../images/home/phone.jpeg'

function Compare({id}) {

    function deleteIconClicked(id) {
        /*  bu yerdan shu kelgan id li mahsulotni campare jadvalidan o'chirib yuborish logikasi
        * yoziladi */
    }

    const characteristic = [
        {
            title: 'Umumiy malumotlar',
            characteristic: [
                {
                    key: 'Ko’rish yoki javob berish bilan bog’liq bildirishnomalar',
                    value: 'SMS, pochta, taqvim, Facebook, Twitter, ob-havo'
                },
                {
                    key: 'Namlikdan chimoya',
                    value: 'Mavjud, IP68'
                },
                {
                    key: 'Braslet materiali',
                    value: 'Silikon'
                },
                {
                    key: 'Operativ tizimi',
                    value: 'Android 4.4 IOS 9'
                },
                {
                    key: 'Touchscreen',
                    value: 'Mavjud'
                },
                {
                    key: 'Interfeys',
                    value: 'Bluetooth v 5.0'
                }
            ]
        },
        {
            title: 'Ekran',
            characteristic: [
                {
                    key: 'Diagonali',
                    value: '1.1"',
                },
                {
                    key: 'Turi',
                    value: 'AMOLED'
                }
            ]
        }
    ]

    return <div className={'compare_comp'}>
        <div className="container">

            <div className="path">
                <Link to={'/'}>Bosh sahifa </Link>
                <span>/</span>
                <Link to={'/compare'}>Taqqoslash jadvali</Link>
            </div>

            <h2 className="compare_title">
                Taqqoslash jadvali
            </h2>

            {/*  If no compare products  */}
            {/*<div className="empty_block">*/}
            {/*    <svg className={'bar_chart'}>*/}
            {/*        <use xlinkHref={svgRoot + '#bar_chart'}/>*/}
            {/*    </svg>*/}

            {/*    <h6 className={'title'}>Taqqoslash ro’yxati bo’sh.</h6>*/}

            {/*    <p className="text">Mos keluvchi tovar topish uchun, taqqoslash ro’yxatiga mahsulotni qo’shing.</p>*/}
            {/*</div>*/}


            {/*  If there are compare products  */}
            <div className="compare_block">
<div className="compare_block_inner">
                <div className="row header">
                    <div className="col-md-6">
                        <select name="" id="" className={'select_product'}>
                            <option value={1}>Smart watch</option>
                            <option value={2}>Iphone</option>
                            <option value={3}>Samsung galaxy A 41</option>
                        </select>

                        <div className={'radio'}>
                            <input type="radio" name={'difference'} id={'allParameter'}/>
                            <label htmlFor="allParameter">Barcha parametrlar</label>
                        </div>
                        <div className={'radio'}>
                            <input type="radio" name={'difference'} id={'onlyDifference'}/>
                            <label htmlFor={'onlyDifference'}>Faqat farqlar</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <Link to={'/product/id'} className={'product_link'}>
                            <img src={phone} alt="Photo not found!" className={'product_img'}/>
                            <svg className={'delete_icon'} onClick={() => deleteIconClicked(id)}>
                                <use xlinkHref={svgRoot + '#menu_close'}/>
                            </svg>
                        </Link>
                        <Link to={'/product/id'}>
                            <p className="product_name"> Xiaomi Mi Band 5, Black XMSH10HM (Global version)</p>
                        </Link>
                        <p className="price">299 000 so'm</p>
                        <button className="add_to_cart btn btn-danger">Xarid savatchasiga qo'shish</button>
                    </div>
                </div>

                <div className="row rating_title">
                    <p>Reyting</p>
                </div>

                <div className="row rating">
                    <div className="col-md-6">
                        <p>Mahsulotni baholash</p>
                    </div>
                    <div className="col-md-6">
                        <div className="star_block">
                            <svg className={'star_icon'}>
                                <use xlinkHref={svgRoot + '#star'}/>
                            </svg>
                            <svg className={'star_icon'}>
                                <use xlinkHref={svgRoot + '#star'}/>
                            </svg>
                            <svg className={'star_icon'}>
                                <use xlinkHref={svgRoot + '#star'}/>
                            </svg>
                            <svg className={'star_icon'}>
                                <use xlinkHref={svgRoot + '#star'}/>
                            </svg>
                            <svg className={'star_icon'}>
                                <use xlinkHref={svgRoot + '#star'}/>
                            </svg>
                        </div>
                        <span className={'rating_text'}>
                            5
                        </span>
                    </div>
                </div>

                    {characteristic.map((item, index) =>
                        <div className={'characteristic_block'}>
                            <div className="row characteristic_title">
                                <p>{item.title}</p>
                            </div>

                            {item.characteristic.map(item2 =>
                                <div className="row characteristic">
                                    <div className="col-md-6">
                                        <p>{item2.key}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <span>{item2.value}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
</div>

            </div>
        </div>
    </div>


}

export default Compare