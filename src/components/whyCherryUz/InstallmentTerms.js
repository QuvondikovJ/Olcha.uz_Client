import passport_1 from '../../images/passport_1.jpg'
import passport_2 from '../../images/passport_2.jpg'
import '../../style/whyCherryUz/whyCherryUz.scss'
function InstallmentTerms() {

    return <div className={'why_cherry_uz'}>
        <div className="container">

            <h1 className="title">Muddatli to’lov shartlari</h1>

            <p className="text">Olcha.uz saytida o'zbekistonning barcha hududlari aholisi uchun muddatli to'lov!</p>

            <div className="sup_title"><b>Muddatli to'lovga harid qilish uchun qanday hujjatlar zarur?</b></div>

            <p className="text">1. Pasport;</p>
            <p className="text">2. Ohirgi 3 oyda faol bo'lgan va SMS-ma'lumotlar hizmati yoqilgan UzCard yoki HUMO bank
                kartasi;</p>

            <p className="sup_title"><b>Mahsulotni muddatli to'lovga harid qilishning qadam-baqadam jarayoni:</b></p>

            <p className="text">1. Saytimizdan kerakli mahsulotni tanlab, bo'lib to'lash tugmasini bosing.O'zingiz uchun
                qulay optimal muddat va boshlang'ich to'lovni tanlang;</p>

            <p className="text">2. Pasportingizning birinchi – surat va ma'lumotlari bor sahifasi fotosini
                yuborasiz;</p>

            <p className="text">Pasportning birinchi sahifasini ochib, birga suratga tushib, yuborasiz;</p>

            <p className="sup_title"><b>Fotosuratga qo'yiladigan talablar:</b></p>

            <p className="text">Fotosurat pasport egasi va pasportdagi uning suratini solishtirish va pasport
                ma'lumotlarini bemalol o'qish mumkin bo'lgan darazhada sifatli bo'lishi darkor!</p>
            <p className="text">
                Foto identifikatsiya bir marta o'tkaziladi va keyingi muddatli to'lovga haridlar chog'ida qayta
                identifikatsiyalash shart emas.
            </p>

            <p className="sup_title"><b>Misol:</b></p>

            <p className="text">Pasportning ma'lumotlar aks etgan ilk sahifasi</p>

            <img src={passport_1} alt="Photo not found!" className={'passport_first'}/>
            <p className="text passport_verify">Pasport verifikatsiyasi</p>
            <img src={passport_2} alt="Photo not found!" className={'passport_second'}/>

            <p className="text">3. Banks kartasi ma'lumotlarini kiriting (karta raqami va amal qilish muddati);</p>

            <p className="text">4. Ommaviy ofertani sinchiklab o'qing va unga rozi bo'lsangiz jo'natish tugmasini
                bosasiz;</p>

            <p className="text">5. Sizga sms keladi va undagi kodni kiritasiz;</p>
            <p className="text">6. Kodni muvaffaqiyatli kiritsangiz, arizangiz qabul qilingani haqidagi sms keladi;</p>

            <p className="text">7. Arizangiz ma'qullansa, Sizga bu xaqda sms-habarnoma keladi;</p>
            <p className="empty_text"/>
            <p className="text">Shu bilan muddatli to'lovga harid jarayoni yakunlanadi.</p>

            <p className="text">Yakunda Sizga harid qilingan mahsulot va shartnomani ko'rsatilgan manzilingizga
                yetkazamiz.</p>
            <p className="sup_title bottom_title"><b>Muddatli to'lov 3 oydan 9 oygacha bo'lgan muddatga beriladi!</b></p>
            <p className="text">Batafsil ma'lumotlar uchun: telegram orqali @olcha_support manziliga yozing

            </p>
        </div>
    </div>

}

export default InstallmentTerms