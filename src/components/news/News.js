import svgRoot from '../../svgIcons.svg'
import photo from '../../images/techblog21.jpg'
import '../../style/home/news.scss'
import '../../style/news/news.scss'
import NewsItem from "./NewsItem";
function News() {


    const news = [
        {
            title: 'Tarmoq videoda e\'lon qilinmagan Galaxy M32-ni ochdi',
            date: '18-06-2021'
        },
        {
            title: 'Tarmoq videoda e\'lon qilinmagan Galaxy M32-ni ochdi',
            date: '18-06-2021'
        },
        {
            title: 'Tarmoq videoda e\'lon qilinmagan Galaxy M32-ni ochdi',
            date: '18-06-2021'
        },
        {
            title: 'Tarmoq videoda e\'lon qilinmagan Galaxy M32-ni ochdi',
            date: '18-06-2021'
        }
    ]

    const colors = [ '#0ea4d3', '#6d3687', '#eb1537',  '#0ea4d3', '#6d3687', '#eb1537', '#0ea4d3', '#6d3687', '#eb1537', '#0ea4d3',]


    function changeBackground(index) {
        return {
            background: 'linear-gradient(to right,' + colors[index] + ', ' + colors[index] + ', ' + colors[index] + ', transparent)'
        }
    }

    return <div className={'news_comp'}>
        <div className="container">

            <div className="title_block">
                <h1 className={'title'}> Samsung Galaxy A52 avgust oyi uchun xavfsizlik yangilanishi</h1>
             <div className="info_news">
                 <svg className={'eye_icon'}>
                     <use xlinkHref={svgRoot + '#eye'}/>
                 </svg>
                 <span className={'eye_count'}>200</span>
                 <svg className={'calendar_icon'}>
                     <use xlinkHref={svgRoot + '#calendar'}/>
                 </svg>
                 <span className={'news_date'}>10-08-2021</span>
             </div>
            </div>


            <p className="info_text">Yana bir bor Samsung yangi xavfsizlik yangilanishini ye’lon qilgan birinchi
                Android-smartfon brendiga aylandi. Janubiy Koreyaning kompaniyasi 2021 yil avgust oyidan boshlab
                xavfsizlik tuzatuvini ye’lon qildi. Sm-A525F modeli bilan A52 SM-A525F modeli, Germaniya, Qozog‘iston va
                Ukrainadagi yangi dasturiy ta’minotni oladi. Yangilanish A525FXU3Aug4 dasturiy ta’minotining versiyasi
                mavjud va 2021 yil avgustdan xavfsizlik tuzatiladi. Samsung avgust yangilanishida xatolarga hali
                tuzatilganligi haqida xabar berilmagan, ammo yuqorida aytib o‘tilgan mamlakatlarda Galaxy A52
                foydalanuvchisi bo‘lsangiz, siz yangi yangilanish tez orada paydo bo‘lishini kutishingiz mumkin
                smartfoningizda mavjud. Avtomatik yangilanishni sozlash Qurilma sozlamalarida operatsion tizimning joriy
                versiyasini o‘tkazib yubormaslik uchun sozlash.</p>

            <h3 className="other_news">Boshqa yangiliklar</h3>
<div className="news_inner">
    {news.map((item, index) =>
    <NewsItem item={item} index={index} changeBackground={changeBackground} />
    )}
</div>

        </div>
    </div>

}

export default News