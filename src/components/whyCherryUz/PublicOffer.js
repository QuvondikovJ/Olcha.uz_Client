import '../../style/whyCherryUz/publicOffer.scss'
import classNames from "classnames";
import $ from 'jquery'
import {Link} from "react-router-dom";
function PublicOffer() {


    const publicOffer = [
        {
            ordinalNumber: 'I.',
            title: 'Huquqiy asos',
            content: [
                {
                    ordinalNumber: '1.1.',
                    text: ' Oferta O‘zbekiston Respublikasi Fuqarolik kodeksi, “Elektron tijorat haqida”gi qonunlar va https://olcha.uz  internet-manzili bo‘yicha «OLCHA UZ» rasmiy Internet-do‘konida taqdim etilgan elektron tijorat shaklidagi tovarlar (ish, xizmat) realizatsiyasini tartibga soluvchi boshqa normativ-huquqiy aktlarga muvofiq ishlab chiqilgan.',
                    style: false,
                    bold: false,
                    underline: false
                },
                {
                    ordinalNumber: '1.2.',
                    text: 'Elektron tijorat shaklida amalga oshiriladigan ulgurji va chakana savdo 2002 yil 26 noyabrda qabul qilingan O‘zbekiston Respublikasi Vazirlar Mahkamasining 407-sonli qarori bilan tasdiqlangan ulgurji va chakana savdo faoliyatini amalga oshirish tartibi haqidagi Nizomi, 2003 yil 13 fevralda qabul qilingan O‘zbekiston Respublikasi Vazirlar Mahkamasining 75-sonli qarori bilan tasdiqlangan chakana savdo Qoidalari va 2016 yil 02 iyunda qabul qilingan O‘zbekiston Respublikasi Vazirlar Mahkamasining qarori bilan tasdiqlangan elektron tijorta faoliyatini amalga oshirish Qoidalari bilan tartibga solinadi.',
                    style: false,
                    bold: false,
                    underline: false
                },
                {
                    ordinalNumber: '1.3.',
                    text: ' Isteʼmolchilar huquqlarini himoya qilish yo‘nalishidagi munosabatlar O‘zbekiston Respublikasi Fuqarolik kodeksi, 1996 yil 26 aprelda qabul qilingan 221-I-sonli “Isteʼmolchilar huquqlarini himoya qilish to‘g‘risida”gi O‘zbekiston Respublikasi qonuni va boshqa normativ-huquqiy aktlar bilan nazorat qilinadi.',
                    style: false,
                    bold: false,
                    underline: false
                }
            ]
        },
        {
            ordinalNumber: 'II.',
            title: 'Atamalar mazmuni',
            content: [
                {
                    ordinalNumber: '2.1.',
                    text: 'Mazkur ofertada, agar kontekst boshqa shartlarni talab qilmasa, quyida keltirilgan atamalar quyidagi mazmunga ega va uning ajralmas tarkibiy qismi hisoblanadi:',
                    style: false,
                    bold: false,
                    underline: false
                },
                {
                    ordinalNumber: 'Aksept —',
                    text: 'huquqiy oqibatlarga ega bo‘lgan taklifda keltirilgan shartlar asosida shartnoma tuzishga oid taklif (oferta) bilan rozilik.',
                    style: false,
                    bold: false,
                    underline: false
                },
                {
                    ordinalNumber: 'Internet-do‘kon saytida Tovarni buyurtirish –',
                    text: ' «OLCHA UZ»  MCHJ Internet-do‘konining https://olcha.uz  manzilidagi sayti yoki telefon raqami bo‘yicha Tovarni sotib olish arizasini arizasini rasmiylashtirish paytida sotuvga qo‘yilgan Tovar assortimentidan Xaridor ko‘rsatgan pozitsiyalar.',
                    style: false,
                    bold: false,
                    underline: false
                },
                {
                    ordinalNumber: 'Internet-magazin -',
                    text: 'Sotuvchi «OLCHA UZ», MCHJning quyidagi manzilda joylashgan rasmiy Internet-do‘koni: https://olcha.uz',
                    style: false,
                    bold: false,
                    underline: false
                },
                {
                    ordinalNumber: 'Oferta —',
                    text: 'bir, bir nechta muayyan yoki nomaʼlum shaxslar doirasiga qaratilgan, hujjatda ko‘rsatilgan shartlarda shartnoma tuzishga istak bildirgan har qanday shaxs bilan taklif qiluvchining (oferent) shartnomani rasmiylashtirish istagini anglatuvchi va unga oid barcha muhim shartlarni o‘z ichiga olgan taklif.',
                    style: false,
                    bold: false,
                    underline: false
                },
                {
                    ordinalNumber: 'Sotuvchi —',
                    text: ' «OLCHA UZ» MCHJ chakana savdo Internet-do‘koni.',
                    style: false,
                    bold: false,
                    underline: false
                },
                {
                    ordinalNumber: 'Xaridor — ',
                    text: ' mazkur oferta shartlarida ommaviy ofertani qabul qilgan, yakuniy isteʼmolchiga mo‘ljallangan axborot tizimlaridan foydalanib tovar (ish, xizmat) xarid qiluvchi har qaysi jismoniy shaxs (O‘zbekiston rezidentlari va norezidentlari).',
                    style: false,
                    bold: false,
                    underline: false
                },
                {
                    ordinalNumber: 'Tovar—',
                    text: ' tomonlar kelishuvining obyekti, quydiga manzil bo‘yicha joylashgan «OLCHA UZ» MCHJ Internet-do‘konidagi taqdim etilgan assortinmentdagi nomlar:  https://olcha.uz',
                    style: false,
                    bold: false,
                    underline: false
                },
                {
                    ordinalNumber: 'Elektron tijorat ishtirokchisi — ',
                    text: ' elektron tijoratda tovarlar (ish, xizmat) Sotuvchisi yoki Xaridori hisoblangan jismoniy shaxs.',
                    style: false,
                    bold: false,
                    underline: false
                }
            ]
        },
        {
            ordinalNumber: 'III. ',
            title: 'Umumiy qoidalar',
            content: [
                {
                    ordinalNumber: '3.1.',
                    text: 'Internet-do‘kon saytida joylashtirilgan Tovarning Xaridor tomonidan buyurtma qilinishi Xaridor mazkur Ofertaning barcha shartlari bilan roziligani anglatadi va Oferent shartnomasidagi shartlarning bevosita aksepti hisoblanadi.',
                    style: false,
                    bold: false,
                    underline: false

                },
                {
                    ordinalNumber: '3.2.',
                    text: 'Internet-do‘kon saytining maʼmuriyati Xaridorni ogohlantirmasdan Ofertaga o‘zgartirish kiritish huquqiga ega. Amaldagi Ofertaga o‘zgartirish kiritilgan taqdirda, o‘zgarishlar saytdagi rasmiy nashrdan keyin kuchga kiradi.',
                    style: false,
                    bold: false,
                    underline: false
                },
                {
                    ordinalNumber: '3.3.',
                    text: 'Agar Internet-do‘kon saytida boshqa shartlar ko‘rsatilmagan bo‘lsa, Ofertaning amal qilish muddati cheklanmagandir.',
                    style: false,
                    bold: false,
                    underline: true
                },
                {
                    ordinalNumber: '3.4. ',
                    text: 'Сотувчи Харидорга Товар ҳақида шартноманинг барча муҳим шартлари билан бир қаторда тўлиқ ва ишончли маълумотни, шу жумладан Товарнинг асосий истеъмол хусусиятлари, ишлаб чиқариш жойи каби ахборотларни тақдим этади. Бундан ташқари Сотувчи қуйидаги интернет манзилда жойлашган «OLCHA UZ» МЧЖ сайтида Товарнинг кафолат ва яроқлилик муддати ҳақидаги ахборотни кўрсатиш ҳуқуқига эгадир: https://olcha.uz',
                    style: true,
                    bold: false,
                    underline: false
                }
            ]
        }
    ]

function scrollMove(index){
        window.scrollTo(0,$('#rule_'+index).offset().top-15)
}

    return <div className={'public_offer_comp'}>
        <div className="container">

            <h1 className={'title'}>Ommaviy oferta</h1>
            <h2 className={'second_title'}>«Olcha.uz» - internet do‘koni</h2>

            {/*  Content list block  */}
            <ol className={'content_list_block'}>
                {publicOffer.map((item, index) =>
                    <li key={index}><span>{index + 1}.</span> <Link href={'/public-offer'} onClick={()=>scrollMove(index)}>{item.title}</Link></li>
                )}
            </ol>


            <p className="third_title"><u>“Olcha.uz”</u> internet-do‘koni ommaviy ofertasi</p>

            <p className="initial_text">Mazkur shartnoma «OLCHA UZ» MCHJ (keyingi o‘rinlarda – MCHJ) ommaviy Oferta
                (keyingi o‘rinlarda – Shartnoma) bo‘lib, «OLCHA UZ» MCHJ bilan ushbu ofertada belgilangan shartlar
                asosida mazkur xarid-sotuv shartnomasini tuzish layoqatiga va kerakli vakolatlarga ega bo‘lgan har
                qanday jismoniy va yuridik shaxsga qaratilgan. Ushbu ofertada shartnomaga tegishli barcha muhim shartlar
                ko‘zda tutilgan.</p>

            <div className="content_block">
                {publicOffer.map((item, index) =>
                    <div key={index} className={'content_item'} id={'rule_'+index}>
                        <p className={'sup_title'}><span>{item.ordinalNumber}</span>{item.title}</p>
                        {item.content.map(item2 =>
                            <p className={'rule_item'}><span>{item2.ordinalNumber}</span>
                                <span className={classNames({
                                        'font_style': item2.style
                                    },
                                    {
                                        'underline': item2.underline
                                    },
                                    {
                                        'bold': item2.bold
                                    })}>{item2.text}</span>
                            </p>
                        )}
                    </div>
                )}
            </div>

            <div className="footer_block">
                <div className="row">
                    <div className="col-md-6">
                        <p className="footer_item">Toshkent shaxri, Mirzo Ulugbek tumani, Salar bo'yi, 35A</p>
                        <p className="footer_item">X/R: 2020 8000 8051 7073 1001</p>
                        <p className="footer_item">AITB “Ipak Yo'li” Shayxantahur filiali</p>
                        <p className="footer_item">MFO: 01145</p>
                        <p className="footer_item">INN: 307086441</p>
                        <p className="footer_item">OKED: 47910</p>
                    </div>
                </div>
                <p className="footer_item">Ommaviy Oferta matni bilan atroflicha tanishib chiqing. Agar Siz
                    mazkur Ofertaning biror bandida keltirilgan shartlarga rozi bo‘lmasangiz, sotuvchi tomonidan
                    taqdim etiladigan Tovar xaridini bekor qilishingiz va bu hujjatning 3.1-bandida keltirilgan
                    harakatlarni bajarmasligingiz mumkin.</p>
            </div>

        </div>
    </div>

}

export default PublicOffer