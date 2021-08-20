import {Link} from "react-router-dom";
import svgRoot from "../../../svgIcons.svg";
import '../../../style/cabinet/cabinetTemplate/departmentsInCabinet.scss'
import $ from 'jquery'
import {useEffect} from "react";

function DepartmentsInCabinet() {

    useEffect(()=>{
switch (window.location.href.substring(21)){
    case '/cabinet/profile' : $('#department_1').addClass('active'); break;
    case '/cabinet/orders' : $('#department_2').addClass('active'); break;
    case '/cabinet/location' : $('#department_3').addClass('active'); break;
    case '/cabinet/favourite' : $('#department_4').addClass('active'); break;
    case '/cabinet/notification' : $('#department_5').addClass('active'); break;
}
    },[])


    function departmentClicked(departmentId) {
        $('#department a .department').removeClass('active')

        setTimeout(()=>{
            $('#department_' + departmentId).addClass('active')
        },100)
    }

    return <div className={'departments_in_cabinet'} id={'department'}>

        <Link to={'/cabinet/profile'}>
            <div className="department" id={'department_1'} onClick={() => departmentClicked(1)}>
                <svg className={'department_icon'}>
                    <use xlinkHref={svgRoot + '#file'}></use>
                </svg>
                <span>Shaxsiy ma'lumotlar</span>
            </div>
        </Link>

        {/*<Link to={'/cabinet/installment'}>*/}
        {/*    <div className="department">*/}
        {/*        <svg className={'department_icon'}>*/}
        {/*            <use xlinkHref={svgRoot + '#file'}></use>*/}
        {/*        </svg>*/}
        {/*        <span>Shaxsiy ma'lumotlar muddatli to'lov uchun</span>*/}
        {/*    </div>*/}
        {/*</Link>*/}

        <Link to={'/cabinet/orders'}>
            <div className="department" id={'department_2'} onClick={() => departmentClicked(2)}>
                <svg className={'department_icon'}>
                    <use xlinkHref={svgRoot + '#open_box'}></use>
                </svg>
                <span>Mening buyurtmalarim</span>
            </div>
        </Link>

        <Link to={'/cabinet/location'}>
            <div className="department" id={'department_3'} onClick={() => departmentClicked(3)}>
                <svg className={'department_icon'}>
                    <use xlinkHref={svgRoot + '#location'}></use>
                </svg>
                <span>Manzil</span>
            </div>
        </Link>

        <Link to={'/cabinet/favourite'}>
            <div className="department" id={'department_4'} onClick={() => departmentClicked(4)}>
                <svg className={'department_icon'}>
                    <use xlinkHref={svgRoot + '#empty_star'}></use>
                </svg>
                <span>Tanlangan mahsulotlar</span>
            </div>
        </Link>

        <Link to={'/cabinet/notification'}>
            <div className="department" id={'department_5'} onClick={() => departmentClicked(5)}>
                <svg className={'department_icon'}>
                    <use xlinkHref={svgRoot + '#bell'}></use>
                </svg>
                <span>Bildirgi</span>
            </div>
        </Link>

    </div>

}

export default DepartmentsInCabinet