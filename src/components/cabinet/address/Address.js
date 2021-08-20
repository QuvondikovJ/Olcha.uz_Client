import '../../../style/cabinet/address/address.scss'
import DepartmentsInCabinet from "../cabinetTemplate/DepartmentsInCabinet";
import {Link} from "react-router-dom";
import {useState} from "react";
import AddedAddresses from "./AddedAddresses";
import svgRoot from '../../../svgIcons.svg'
function Address() {

    const [isNoAddress, setIsNoAddress] = useState(false)
    return <div className={'address_comp'}>

        <div className="container">

            <div className="path">
                <Link to={'/'}>Bosh sahifa </Link>
                <span>/</span>
                <Link to={'/cabinet'}>Kabinet</Link>
                <span>/</span>
                <Link to={'/cabinet/location'}>Manzillar</Link>
            </div>

            <div className="address_inner">
                <div className="address_item">
                    <DepartmentsInCabinet/>
                </div>
                <div className="address_item">
                    <Link to={'/cabinet/location/form'}>
                        <button className="address_add">
                            <span>+</span> Manzil qo'shish
                        </button>
                    </Link>

                    {/* If no addresses */}
                    {isNoAddress ?
                        <div>

                            <svg className={'gps_icon'}>
                                <use xlinkHref={svgRoot+'#gps'}> </use>
                            </svg>

                            <h4 className="title">
                                Sizning manzillar kitobingiz hozircha bo'sh.
                            </h4>

                            <p className={'text'}>Xarid qilish jarayonini yanada osonlashtirish uchun manzillarni
                                qo'shing.</p>
                        </div>
                        :
                        <AddedAddresses apartment={22} homeNumber={42} region={'Tashkent'} district={'Uchtepa'}
                                        department={1} floor={3} street={'Muqimiy'} confirmStandard={false}/>
                    }
                </div>
            </div>
        </div>
    </div>
}

export default Address