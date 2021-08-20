import {Link} from "react-router-dom";
import carwash from '../../images/home/carwash.png'
import phone from '../../images/home/ear_phone.png'
import '../../style/catalog/grandCategory.scss'
function GrandCategory() {

    const supCategories = [
        'Kir yuvish mashinalari',
        'Changyutgich va aksessuarlar',
        'Iqlim ta’minlovchi qurilmalar',
        'Dazmollar',
        'Yorituvchi moslamalar',
        'Tikuv uskunalari',
        'Minimoyka',
        'Suvisitgichlar',
        'Tashqi sovutgich',
    ]
    /* Bunda xar bir grand category bolasida yani father categoryni o'zini img bo'ladi va img bilan
    * birga keladi backend dan */

    return <div className={'grand_category_comp'}>
        <div className="container">

            <div className="path">
                <Link to={'/'}>Bosh sahifa</Link>
                <span>/</span>
                <Link to={'/categoryUrl'}>categoryName</Link>
            </div>


            <h4 className="title">categoryName</h4>

            <div className="grand_inner">

                <div className="grand_item">
                    <div className="grand_header">
                        <div className="sup_title">Kategoriyalar</div>
                    </div>
                    <div className="grand_content">
                        {supCategories.map((item, index) =>
                            <Link className={'category_name'}>{item}</Link>
                        )}
                    </div>
                </div>

                <div className="grand_item">
                    {supCategories.map((item, index) =>
                        <Link className="category_block">
                            <img src={'https://fakeimg.pl/125'} alt="Photo not found!"/>
                            <p>{item}</p>
                        </Link>
                    )}
                </div>

            </div>

        </div>
    </div>

}

export default GrandCategory