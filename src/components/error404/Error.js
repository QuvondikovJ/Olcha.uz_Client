import shadow from '../../images/shadow.svg'
import plus from '../../images/plus.svg'
import dot from '../../images/dot.svg'
import star_ship from '../../images/star-ship.svg'
import light_group from '../../images/light-group.svg'
import cherry from '../../images/olcha-sm.svg'
import '../../style/error404/error.scss'
import {Link} from "react-router-dom";
function Error() {

    return <div className={'error_comp'}>
        <div className="container">

            <div className="row">

                <div className="col-md-6">

                    <h1 className="title">Ana Xolos!</h1>

                    <p className="text">Siz qidirayotgan sahifa o’chirilgan yoki mavjud emas :(</p>
                    <p className="error_code">Xatolik kodi: 404</p>
                 <Link to={'/'}><button className="come_back_btn">Bosh sahifaga o'tish</button></Link>
                </div>
                <div className="col-md-6">
                  <div className="img_block">
                      <img className={'star_ship'} src={star_ship} alt="Photo not found!"/>
                      <img className={'light_group'} src={light_group} alt="Photo not found!"/>
                      <img className={'cherry'} src={cherry} alt="Photo not found!"/>
                      <img className={'shadow'} src={shadow} alt="Photo not found!"/>
                      <img className={'plus_1'} src={plus} alt="Photo not found!"/>
                      <img className={'plus_2'} src={plus} alt="Photo not found!"/>
                      <img className={'plus_3'} src={plus} alt="Photo not found!"/>
                      <img className={'dot_1'} src={dot} alt="Photo not found!"/>
                      <img className={'dot_2'} src={dot} alt="Photo not found!"/>
                      <img className={'dot_3'} src={dot} alt="Photo not found!"/>
                  </div>
                </div>


            </div>

        </div>
    </div>

}

export default Error