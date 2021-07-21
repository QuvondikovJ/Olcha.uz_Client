import {Link} from "react-router-dom";
import '../../style/header/compare/emptyCompare.scss'
import '../../style/templatePath/path.scss'
import svgRoot from '../../svgIcons.svg'
function EmptyCompare() {


    return <div className={'empty_compare'}>
        <div className="container">

            <div className="path">
                <Link to={'/'}>Bosh sahifa </Link>
                <span>/</span>
                <Link to={'/compare'}>Taqqoslash jadvali</Link>
            </div>

            <h2 className="compare_title">
                Taqqoslash jadvali
            </h2>

<div className="empty_icon">
   <svg className={'bar_chart'}>
       <use xlinkHref={svgRoot+'#bar_chart'}>  </use>
   </svg>
    <div className="title">
        Taqqoslash ro’yxati bo’sh.
    </div>
    <div className="text">
        Mos keluvchi tovar topish uchun, taqqoslash ro’yxatiga mahsulotni qo’shing.
    </div>
</div>

        </div>
    </div>


}

export default EmptyCompare