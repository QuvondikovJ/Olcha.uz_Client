import {Link} from "react-router-dom";
import '../../style/header/help/help.scss'
import '../../style/templatePath/path.scss'
import $ from 'jquery'
import {useRef} from "react";

function Help() {


    const help = [
        {
            question: 'Mahsulot haqidagi ma’lumotlarni qaerdan ko’rsam bo’ladi?',
            answer: 'Mahsulot surati tagidagi «Texnik imkoniyatlari» havolasini bosing.'
        },
        {
            question: 'Bir necha mahsulotni qanday qilib taqqoslash mumkin?',
            answer: 'Har bir mahsulot sahifasini birma-bir oching va «Taqqoslash» tugmasini bosing. Shundan so’ng, saytning ' +
                'o’ng yuqori burchagidagi tugmani bosish orqali taqqoslash sahifasiga o’ting.'
        },
        {
            question: 'Nega ilgari sotib olgan mahsulotimni sotib ololmayapman?',
            answer: 'Savatchadagi ayrim mahsulotlar omborda qolmagan bo‘lish ehtimoli mavjud, shuning uchun ' +
                'Siz bizga 71-202-202-1 raqamiga qo‘ng‘iroq qilishingiz mumkin va kelajakda u haqida xabardor ' +
                'qilish uchun sizga zarur mahsulotni yozib olamiz.'
        },
        {
            question: 'Qanday aksiyalar borligini qanday bilish mumkin?',
            answer: 'Siz mavjud aksiyalar haqida «Aksiyalar» tugmasini bosib bilib olishingiz mumkin.'
        },
        {
            question: 'Qanday qilib buyurtmani rasmiylashtirish mumkin?',
            answer: '1) Siz o‘zingizga zarur mahsulotni belgilashingiz yoki sayt yuqorisida joylashgan qidiruv maydoniga so‘rov ' +
                'yozish orqali topishingiz kerak. 2) So‘ng zarur mahsulotni ochib, kerakli parametrlarini tanlang va «Sotib olish» tugmasini bosing.' +
                ' 3) Mahsulotni ko‘zdan kechirish va buyurtma qilish uchun savatchaga o‘tishingiz zarur. 4) So‘ng «Buyurtmani rasmiylashtirish» tugmasini bosing.' +
                ' 5) Etkazib berish sahifasini to‘ldiring. Barcha ma’lumotlaringizni kiriting: «Bog‘lanish uchun», «Etkazib berish turi»,' +
                ' «Etkazib berish usuli». Mazkur sahifada sizga ma’qul to‘lov turini belgilab, «Buyurtmani rasmiylashtirish» tugmasini bosing.' +
                ' Eslatma! Siz xaridlarni saytdan ro‘yhatdan o‘tmay turib amalga oshirishingiz mumkin, ammo bunda o‘z buyurtmangiz ' +
                'holatini tekshirish va xokazo imkoni bo‘lmaydi. Agar saytdan ro‘yhatdan o‘tmoqchi bo‘lsangiz va Sizga yordam kerak bo‘lsa,' +
                ' 71-202-202-1 raqamiga qo‘ng‘iroq qilishingiz mumkin'
        },
        {
            question: 'Yoqqan mahsulot saytda bo‘lmasa, uni buyurtma qilsa bo‘ladimi?',
            answer: 'Agar Sizga biron bir mahsulot kerak bo‘lsa, biroq uni bizning onlayn do‘konimizda topa olmagan bo‘lsangiz, Siz bizga ' +
                '71-202-202-1 raqamiga qo‘ng‘iroq qilishingiz mumkin va biz sizga zarur mahsulotni yetkazishga harakat qilamiz.'
        },
        {
            question: 'Pick-up Point nima?',
            answer: 'Olcha.uz ning yangi imkoniyati saytimizdagi mahsulotni rasmiylashtirib va rasmiylashtirish jarayonida tanlagan' +
                ' o‘zingiz uchun qulay bo‘lgan do‘konimizdan olib ketish imkoniyatini taqdim etadi. ' +
                'Pick-up Point ga yetkazib berish muddati 2 ish kuni.'
        },
        {
            question: 'Mahsulot «pick-up point» (o‘zi olib ketish nuqtasida) qancha vaqt kutib turadi?',
            answer: 'O‘z buyurtmangizni 2 kun ichida o‘zingiz uchun qulay bo‘lgan istagan vaqtingizda olib ketishingiz mumkin. Agar 2 kun ichida olib ketishga imkoningiz bo‘lmasa,' +
                ' u holda bizga 71-202-202-1 raqamiga qo‘ng‘iroq qiling va biz Siz haqingizda qayg‘uramiz!'
        },
        {
            question: 'Buyurtmani qabul qilishning qanday usullari mavjud?',
            answer: '«Olcha.uz» internet do’konida buyurtmani rasmiylashtirgandan so’ng, uyga eltish xizmatini yoki «pick-up point» usullarini tanlashingiz mumkin. ' +
                'Ikkinchi usulda mahsulot buyurtmasini rasmiylashtirish jarayonida Siz olib ketish nuqtalari ro’yhatini ko’rasiz.'
        },
        {
            question: 'Agar mahsulot uchun to’lovni amalga oshirgandan so’ng, fikrimdan qaytsamchi?',
            answer: 'Mahsulot xarididan so’ng 24 soat ichida fikringizdan qaytib qolsangiz (mahsulot o’rami yoki plombasi buzilmagan holatda), ' +
                'bunda mahsulot uchun sarflagan mablag’ingiz Sizning bank kartangizga qaytariladi (sotib olish vaqtidagi to’lov shaklidan ' +
                'qat’iy nazar, mablag’ingizni ban kartangizga olasiz). Naqdsiz pul mablag’larining qaytarilishi 5 -10 bank ish kunini ' +
                'o’z ichiga olishi mumkin. Eslatma! Agar bank kartangiz bo’lmasa, ' +
                'mablag’ingizni qaytarib olish uchun karta ochib, bizga o’z hisob raqamingizni taqdim etishingiz mumkin.'
        },
        {
            question: 'Pick-up point xizmatidan foydalangan holda olgan taqdirda mahsulotni qanday qilib qaytarish yoki almashtirish mumkin?',
            answer: 'Mahsulotni almashtirish va qaytarilishi «pick-up-point» xizmatisiz sotib olingandek,xuddi o’sha qoidalar asnosida amalga oshiriladi.' +
                ' Ko’proq ma’lumot uchun «Mahsulotni qaytarish va almashtirish» bo’limini o’qishingiz mumkin.'
        },
        {
            question: 'Boshqa shahardagi yaqin tanishlarim qabul qilib olishlari uchun ma’lum bir shahardan buyurtma qila olamanmi?',
            answer: 'Albatta, buning uchun Sizga zarur shahar yoki hududni va qulay bo’ladigan do’konni tanlashingiz kerak (bunda barcha shahar/hududlarda pick-up point nuqtalari ' +
                'mavjud emasligini inobatga olish darkor. Bunday holatda siz yetkazib berish xizmatidan foydalanshingiz mumkin bo’ladi).'
        },
        {
            question: 'Mahsulotni qachon olib ketish mumkinligini qanday bilsam bo’ladi?',
            answer: 'Ro’yhatdan o’tish vaqtida yoki mahsulotni buyurtma qilish vaqtida o’z shaxsiy ma’lumotlaringizni: F.I.Sh, uyali telefon' +
                ' raqamini, elektron manzilni(Email) va boshqalarni kiritishingiz shart. Sizning mahsulotingiz tayyor bo’lgandan so’ng,' +
                ' biz sizga habar jo’natamiz, va Siz uni «Showroom» (pick-up point) dan olib ketishingiz mumkin bo’ladi. Bildirgi ' +
                'kelganligini tekshirish uchun shaxsiy kabinetingizga' +
                ' kirishingiz kerak, bundan tashqari siz ko’rsatgan telefon raqamiga SMS habar ham jo’natiladi.'
        },
        {
            question: 'Men tanlagan mahsulot «pick-up point» ga yetkazib berilishiga to‘lashim kerakmi?',
            answer: 'Agar Sizning buyurtmangiz og‘irligi 1 kg gacha bo‘lsa, u holda yetkazib berish bepul. 1 kg dan ortiq ' +
                'bo‘lgan xarid uchun yetkazib berish - 25 000 so‘m, va xar 3 kg uchun 5 000 so‘mdan' +
                ' qo‘shib boriladi (Maxsulotni tanlaganingizda yetkazib berish narxi avtomatik ravishda ko‘rinadi)'
        },
        {
            question: 'Mahsulotning yetkazib berish va boshqalar bilan yakuniy narxi qancha bo‘ladi?',
            answer: 'Agar Siz mahsulotning yetkazib berish bilan birga yakuniy narxini bilmoqchi bo‘lsangiz, u holda yetkazib ' +
                'berish turini tanlashingiz zarur. Yetkazib berish narxlari to‘g‘risida ma’lumotga ega bo‘lmoqchi bo‘lsangiz ' +
                '«Etkazib va eltib berish xizmati» bo‘limini o‘qing. Batafsil ma’lumotlarga ega ' +
                'bo‘lish uchun bizning qo‘llab-quvvatlash markazimizga qo‘ng‘iroq qiling: 71-202-202-1'
        },
        {
            question: 'Maishiy texnikalarni o‘rnatish bo‘yicha xizmatlarni taqdim etasizmi?',
            answer: '«Olcha.uz» bu masala yuzasidan ish olib boryapti, biroq texnikalarni to‘g‘ri o‘rnatilishi uning ishlash qobiliyatiga' +
                ' ta’sir etadi. Mahsulotlarni o‘rnatish (ulash) o‘rnatish huquqiga ega tashkilotlar uchun ruxsat etiladi. Bundan tashqari,' +
                ' mahsulotlarni tarqatish va xizmat ko‘rsatishga moslashtirilgan muayyan bir tashkilotlar ustalari tomonidan amalga oshiriladi. ' +
                'O‘rnatish kafolatini o‘rnatish bilan shug‘ullanuvchi tashkilot o‘z zimmasiga oladi.'
        },
        {
            question: 'Diqqat!',
            answer: 'Texnikani o’rnatish va ulash-muhim va jiddiy jarayon hisoblanib, uning to’g’ri bajarilishidan texnikaning sifati, ' +
                'kamdan-kam holatlarda esa uning egasining xavfsizligi bilan bog’liq. Ulash jarayonida mutaxassis barcha qoidalarga' +
                ' rioya qilishi va sifatli materail ishlatishi katta ahamiyatga ega, chunki turli xil yorilish, oqib ketish va portlashlar' +
                ' kuzatilishi ehtimoli katta. Agar texnikani ulash paytida texnikani ishlab chiqaruvchisi ' +
                'o’rnatgan me’yorlar bajarilmasa, u xaridorni kafolatli xizmatdan mahrum qilishi mumkin.'
        },

    ]

    function questionClicked(index) {
        let answer = document.getElementById('help_' + index)
        window.scrollTo(0, answer.offsetTop-15)

        answer.classList.add('active')
        setTimeout(() => {
            answer.classList.remove('active')
        }, 2000)
    }


    return <div className={'help'}>

        <div className="container">

            <div className="path">
                <Link to={'/'}>Bosh sahifa</Link>
                <span>/</span>
                <Link to={'/help'}>Yordam</Link>
            </div>

            <div className="help_inner">

                <div className="help_item">
                    {help.map((item, index) =>
                        <Link to={'/help'} onClick={() => questionClicked(index)}>{item.question}</Link>
                    )}

                </div>

                <div className="help_item">

                    <h1 className={'help_title'}>
                        Ko’p beriluvchi savollar va sayt bo’yicha yordam
                    </h1>

                    {help.map((item, index) =>
                        <div className="help_block" id={'help_' + index}>
                            <h5 className={'question'}>{item.question}</h5>
                            <p className={'answer'}>{item.answer}</p>
                        </div>
                    )}

                </div>

            </div>

        </div>

    </div>

}

export default Help