import bg from "../../images/techblog21.jpg";
import '../../style/news/newsItem.scss'
function NewsItem({slickChange, item, changeBackground, index}){

    return   <div className="news_item"  onClickCapture={slickChange} key={index}>
        <div className="news_title">
            {item.title}
        </div>

        <p className={'news_date'}>
            {item.date}
        </p>
        <span
            style={changeBackground(index)} className={'bg_gradient'}>
                            </span>
        <img src={bg} alt="Not found!" className={'news_img'}/>
    </div>

}
export default NewsItem