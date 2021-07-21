import '../../style/home/history.scss'
import phone from '../../images/home/fridge.jpeg'

function History() {


    const history = Array(10).fill(phone)

    return <div className={'history'}>

        <div className="container">

            <div className="history_title">
                Ko'rish tarixi
            </div>

            <div className="for_scroll">

            <div className="history_inner">
            {history.map((item, index) =>
                <div className="history_movement" key={index}>
                    <img src={item} alt={'Not found!'}/>
                </div>
            )}
            </div>

            </div>
        </div>


    </div>

}

export default History