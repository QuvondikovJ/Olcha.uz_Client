import '../../style/home/about.scss'

function About() {

    const phones = Array(15).fill('Samsung A52')
    const tvs = Array(15).fill('Samsung SmartTV 43"')
    const carWash = Array(15).fill('Samsung 7kg')

    return <div className={'about_block'}>

        <div className="container">

            <h1 className="title">
                Olcha onlayn do'koni - xarid qilish uchun qulay gipermarket
            </h1>

            <p className={'text'}>
                O‘zbekistonda elektron tijorat jadallik bilan rivojlanib bormoqda. Yurtimiz aholisi ham tez-tez internet
                orqali tovarlarni sotib olmoqda. Nega endi olchada eng yangi telefon yoki smartfonni topsangiz, uni
                qidirib bir do‘kondan boshqasiga o‘tishni xohlaysiz? Bitta klik bilan Olchada nafaqat mobil telefonlar,
                balki zamonaviy noutbuklar kabi elektronika, planshetlar, aqlli soatlar va mobil aksessuarlar kabi
                zamonaviy texnikalar xarid qilishingiz mumkin. Hayot tarzi uchun poyabzal, kiyim va aksessuarlar;
                divanlar, ovqatlanish stollari va shkaflar kabi zamonaviy mebellardan, hayotingizni yengillashtiradigan
                maishiy texnika, masalan kir yuvish mashinalari , televizorlar, konditsionerlar, Mikser va go‘sht
                maydalagich, blender va sharbat siqqichlar xayotingizni yengillashtirishga ko‘mak beradi. Biz Siz uchun
                uy jihozlari, yostiq sumkalari, zambil va choyshablardan o‘yinchoqlar va musiqa asboblariga qadar
                barchasini qo‘shdik . Siz bu erda sizni qiziqtirgan hamma narsani topishingizga amin bo‘lishingiz
                mumkin. Vaqti tig‘iz insonlar uchun Olcha eng yaxshi tanlovdir.
                Vaqtni istalgan paytida, istasangiz tunda yoki tong otganda pijamangizda istalgan joydan turib xarid
                qiling. Ushbu onlayn-do‘kon hech qachon ishlashdan to‘xtamaydi.
            </p>

            <p className={'text'}>
                Bundan tashqari, bizning doimiy ravishda mahsulotlarga chegirmalar berib borishimiz sababli eng maqbul
                va arzon narxlarda xotirjam mahsulot xarid qilasiz. Ishonchimiz komilki, siz rejalashtirganingizdan
                ko‘proq narsani sotib olasiz. Agar nima uchun Olchada xarid qilish kerakligi haqida o‘ylayotgan
                bo‘lsangiz, unda sizning savolingizga javob quyida beriladi.
            </p>

            <h2 className={'title'}>
                Olchada nimalarni sotib olish mumkin?
            </h2>

            <h3 className={'title'}>Mobil telefonlar va smartfonlar</h3>

            <p className={'text'}>
                Byudjet telefonlaridan tortib eng zamonaviy smartfonlarga qadar bizda hamma uchun mos mobil telefonlar
                mavjud. Agar sizga katta ekranlar, kuchli batareyalar, chaqmoqday tezkor protsessorlar, yuqori
                texnologiyali selfi kameralar yoki shunchaki katta xotira kerak bo‘lsa, biz sizga mosini topib beramiz.
                Samsung, Apple, Oppo, Xiaomi, Realme, Vivo, Honor, Huawei, BQ va boshqa ko‘plab eng mashhur brendlardan
                xarid qiling. Bizdan faqat eng ishonchli brendlardan sotib olishingiz mumkin. Bundan tashqari, mobil
                telefonlar rasmiy 1 yil kafolatga ega, va IMEI ro‘yxatidan o‘tgan.
            </p>

            <h3 className={'title'}>Elektron qurilmalar va aksessuarlar</h3>

            <p className={'text'}>
                Noutbuklar haqida gap ketganda, biz orqada emasmiz. Qisqa vaqt ichida saytimizdagi saralashlardan
                foydalanib o‘nlab tezkor operativ xotiralarni, qattiq disk hajmini, turmush tarzingizga mosini, ekran
                o‘lchamlari va boshqalarni filtrlang. Talabalar qaysi noutbukni sotib olishni bilmayapsizmi? Bizning
                do‘konimiz Hp Lenovo Asus Acer Apple kabi eng yaxshi brendlarning tavsiyalari bilan noutbuklarni
                maqsadlari bo‘yicha (o‘yinlar, filmlar va musiqa, va dars qilish uchun, loyihalashtirish ishlari, dizayn
                va boshqa ko‘plab vazifalar uchun) tasniflaydi , bu sizning xaridlaringizni osonlashtiradi va
                tezlashtiradi.
            </p>


            <p className={'text'}>
                Hurmatli fotosuratlarni sevuvchilar Siz biznikidan yaxshiroq sahifa topa olmaysiz. Zamonaviy kameralar,
                abadiy ishonchli kameralar va linzalar, sevimli lahzalarni muhrlash uchun kameralar yoki sarguzashtlarni
                sevuvchilar uchun harakat kameralari: bizning kameralarimiz rasmga olishni yangi boshlaganlar va
                professional mutaxassislar uchun juda mos keladi. Bizdan dunyoga mashhur Canon, Nikon, GoPro, Sony va
                Fujifilm kabi taniqli brendlar ishlab chiqaruvchi foto va video qurilmalar va ularning aksessuarlarini
                topishingiz mumkin.
            </p>

            <p className={'text'}>
                O‘zingizning uyingizni ajoyib ovozli va yuqori sifatli kinoteatrga aylantiring. Ajoyib taassurot olish
                uchun Sony, LG JBL va Philips Tower soundbar karnaylari va uy kinoteatrlarini sinchkovlik bilan
                tizimimizdan tanlang. Audio vositalaridan, quvvatlagichlardan, xotira kartalaridan, mobil zaryadlovchi
                qurilmalardan tortib selfi tayoqchalariga qadar turli xil mobil aksessuarlarimiz siz va sizning
                telefoningiz uchun eng yaxshi sayohat hamrohi bo‘lishi mumkin; Keyingi taʼtilda zaryadingiz yoki
                xotirangiz tugamasligi haqida hech qachon tashvishlanmang.
            </p>

            <h3 className={'title'}>
                Katta maishiy texnika
            </h3>

            <p className={'text'}>
                Chiroyli televizorlar, energiyani tejaydigan muzlatgichlar, tez sovitadigan konditsionerlar, kir yuvish
                mashinalari - uyingizni bitta tugma bilan boshqarish uchun kerak bo‘lgan hamma narsani kashf eting.
                Bizning ishonchli do‘konimiz, agar yetkazib berish paytida biror korxol ro‘y bersa, almashtirish
                kafolati bilan etkazib berishni zimmasiga oladi. Sizning qulayligingizga muvofiq etkazib berish,
                shuningdek rasmiy brend kafolatiga to‘liq ishonishingiz mumkin. Samsung, Lg, Ziffler, Midea, Mi, Artel,
                Shivaki, Ziffler, Sony, Beko, Gree va boshqa ko‘plab mashhur brendlar tomonidan ishlab chiqarilgan
                bozorning oldi mahsulotlarini bizdan xarid qiling.
            </p>


            <h3 className={'title'}>
                Kichik maishiy texnika
            </h3>

            <p className={'text'}>
                Sizning hayotingizni yengillashtiradigan qulay va amaliy maishiy texnikani toping: changyutgichlar,
                tikuv mashinalari, mini yuvish mashinalari, suv isitgichlar, elektr choynaklar, mikroto‘lqinli pechlar,
                sendvich tayorlagichlar, qo‘l aralashtirgichlar, kofe qaynatgichlar va boshqa ko‘plab maishiy texnika
                vaqtni tejaydigan va tezroq turmush tarzi uchun mo‘ljallangan. Uyda ushbu jihozlar bilan shohona hayot
                kechiring.
            </p>

            <h3 className={'title'}>
                Uy va ko‘cha uchun mebel
            </h3>


            <p className={'text'}>Yangi joyga ko‘chib o‘tish hech qachon oson bo‘lmaydi, ayniqsa yangi mebel sotib
                olsangiz. To‘shaklar,
                divanlar, ovqatlanish stollari, shkaflar, televizorlar - hamma narsani qayta sozlash oson emas. Tanlash
                uchun yuzlab variantlar bilan juda ko‘p vaqt ketishi mumkin. Qaysi joy ishonchli, qaysi mebel vaqt
                sinovidan o‘tadi? Do‘konni tanlashdan oldin o‘zingizga bu savollarni berishingiz kerak. Bizning mebel
                do‘konimiz nafaqat zamonaviy O‘zbekistonlik isteʼmolchining talablariga moslashtirilgan bir qator
                mebellarni, balki sertifikatlangan mebellarni ham taqdim etadi ular sizga ko‘p yillar xizmat qiladi.Siz
                barcha mebellarga ega bo‘lishingiz mumkin, ammo qo‘shimcha dekorsiz uyingiz bo‘m bo‘sh ko‘rinishi
                mumkin. Pardalar, yostiq choyshablari, choyshablar, devor javonlari, rasmlar, pol lampalari - Olchada
                uyni bir tom ostida shinam qasrga aylantiradigan hamma narsani toping.
            </p>


            <h3 className={'title'}>
                Telefonlar:
            </h3>

            <div className="about_links">
                {phones.map((item, index) =>
                    <p key={index} className={'text'}>
                        {item} <span>|</span>
                    </p>
                )}
            </div>

            <h3 className={'title'}>
                Televizorlar:
            </h3>

            <div className="about_links">
                {tvs.map((item, index) =>
                    <p key={index} className={'text'}>
                        {item} <span>|</span>
                    </p>
                )}
            </div>

            <h3 className={'title'}>
                Kir yuvish moshinalari:
            </h3>

            <div className="about_links">
                {carWash.map((item, index) =>
                    <p className={'text'} key={index}>
                        {item} <span>|</span>
                    </p>
                )}
            </div>
        </div>

    </div>

}

export default About