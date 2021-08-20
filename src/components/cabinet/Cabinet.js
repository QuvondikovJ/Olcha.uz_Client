import {Link} from "react-router-dom";
import '../../style/cabinet/cabinet.scss'
import '../../style/templatePath/path.scss'
import DepartmentsInCabinet from "./cabinetTemplate/DepartmentsInCabinet";

function Cabinet() {


    return <div className={'cabinet'}>
        <div className="container">

            <div className="path">
                <Link to={'/'}>Bosh sahifa </Link>
                <span>/</span>
                <Link to={'/cabinet'}>Kabinet</Link>
            </div>

            <div className="cabinet_inner">

                <DepartmentsInCabinet/>

            </div>

        </div>
    </div>

}

export default Cabinet