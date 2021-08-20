import star from "../../../svgIcons.svg";
import '../../../style/home/template/product_item.scss'
function ProductItem({item}){

    return <div className={'product_temp'}>
                <span className={'product_img'}>
                                  <img src={item.img} alt="Not found!"/>
                                  </span>
        <a className={'product_category'}>{item.category}</a>
        <a className={'product_name'}>{item.name}</a>
        <p className={'star'}>

            <svg className={'star_item'}>
                <use xlinkHref={star + '#star'}/>
            </svg>
            <svg className={'star_item'}>
                <use xlinkHref={star + '#star'}/>
            </svg>
            <svg className={'star_item'}>
                <use xlinkHref={star + '#star'}/>
            </svg>
            <svg className={'star_item'}>
                <use xlinkHref={star + '#star'}/>
            </svg>
            <svg className={'star_item'}>
                <use xlinkHref={star + '#star'}/>
            </svg>

        </p>

        <p className={'rassrochka'}> {item.rassrochka}</p>
        <p className={'discount'}> {item.discount}</p>
        <p className={'price'}>{item.price}</p>


        <span className={'delivery'}>
                        <svg className={'delivery_icon'}>
                            <use xlinkHref={star + '#delivery'}> </use>
                        </svg>
                    </span>
    </div>

}
export default ProductItem