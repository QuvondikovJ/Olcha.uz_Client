import svgRoot from '../../../svgIcons.svg'
import {Link} from "react-router-dom";
import DepartmentsInCabinet from "../cabinetTemplate/DepartmentsInCabinet";
import '../../../style/cabinet/notification/notification.scss'

function Notification() {

    const notifications = [
        {
            text: 'Sizga shuni ma\'lum qilamizki : siz buyurtma qilgan mahsulot tez orada\n' +
                '                        platformamizga yuklanadi va biz bu haqida yana bir bor sizga xabar qilamiz!',
            date: '18:26   27.07.2021'
        },
        {
            text: 'Sizga shuni ma\'lum qilamizki : siz buyurtma qilgan mahsulot tez orada\n' +
                '                        platformamizga yuklanadi va biz bu haqida yana bir bor sizga xabar qilamiz!',
            date: '18:26   27.07.2021'
        },
        {
            text: 'Sizga shuni ma\'lum qilamizki : siz buyurtma qilgan mahsulot tez orada\n' +
                '                        platformamizga yuklanadi va biz bu haqida yana bir bor sizga xabar qilamiz!',
            date: '18:26   27.07.2021'
        },
        {
            text: 'Sizga shuni ma\'lum qilamizki : siz buyurtma qilgan mahsulot tez orada\n' +
                '                        platformamizga yuklanadi va biz bu haqida yana bir bor sizga xabar qilamiz!',
            date: '18:26   27.07.2021'
        },

    ]

    return <div className={'notification_comp'}>
        <div className="container">

            <div className="path">
                <Link to={'/'}>Bosh sahifa </Link>
                <span>/</span>
                <Link to={'/cabinet'}>Kabinet</Link>
                <span>/</span>
                <Link to={'/cabinet/notification'}>Bildirgilar</Link>
            </div>


            <div className="notification_inner">

                <div className="notification_item">

                    <DepartmentsInCabinet/>

                </div>

                <div className="notification_item">

                    <h4 className="title">
                        Bildirgilar
                    </h4>

                    {/* If no notifications */}
                    <div className="empty_notification">

                        <svg className={'notification_icon'}>
                            <use xlinkHref={svgRoot + '#notification'}></use>
                        </svg>

                        <h6 className={'text'}>Bildirgilar mavjud emas.</h6>

                    </div>


                    {/*  If there are notifications */}
                    {notifications.map((item, index) =>
                        <div className={'notification_block'}>
                            <p className={'notification_text'}>{item.text}</p>
                            <div className="date_block">
                                <div>
                                    <svg className={'delete_icon'}>
                                        <use xlinkHref={svgRoot + '#delete'}></use>
                                    </svg>
                                    <span>Olib tashlash</span>
                                </div>
                                <p className={'date'}>{item.date}</p>
                            </div>

                        </div>
                    )}


                    {/*  Pagination bu yerda bo'ladi */}

                </div>

            </div>

        </div>
    </div>

}

export default Notification