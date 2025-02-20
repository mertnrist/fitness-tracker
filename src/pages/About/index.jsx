import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Container from '../../components/shared/Container'

const About = () => {
    const data = [
        {
            "title": "Amacımız",
            "content": "Spor yapan bireyleri bir arada bulundurarak kendi gelişimlerini takip etmelerini sağlıyoruz. İnternet üzerinde birçok kaynak olmasına rağmen hepsinin bir arada olmasının iyi olacağını düşündük ve sizlere bu hizmeti ücretsiz sunuyoruz."
        },
        {
            "title": "Neden ücretsiz",
            "content": "Aslında bu projenin ücretli olması için bir sebep bulunmuyor. Büyük gideri bulunan bir proje de değil. Hiçbir zaman sizden para talep etmeyeceğiz."
        },
        {
            "title": "Güvenli mi",
            "content": "Bilgilerinizi asla ve asla 3. tarafla paylaşmıyoruz. Kendiniz sistem üzerinden paylaşmak isterseniz, örneğin; antrenman programınız ve kendi formlarınızı paylaşabilirsiniz."
        },
        {
            "title": "KVKK ve Gizlilik Politikamız",
            "content": "Kişisel verilerinizi gizlilik çerçevesinde saklıyoruz ve hiçbir şekilde 3. şahıslarla paylaşmıyoruz. KVKK kapsamında verileriniz üzerinde tam kontrole sahipsiniz ve dilediğiniz zaman silme veya değiştirme talebinde bulunabilirsiniz."
        },
        {
            "title": "Toplanan Veriler",
            "content": "Sadece üyelik oluşturma, antrenman takibi ve performans analizi için gerekli temel bilgileri topluyoruz. Bunlar adınız, e-posta adresiniz ve isteğe bağlı olarak spor geçmişiniz olabilir."
        },
        {
            "title": "Veri Kullanımı",
            "content": "Verileriniz yalnızca size daha iyi bir spor deneyimi sunmak için kullanılacaktır. İstatistikler, kişiselleştirilmiş öneriler ve gelişim analizleri sağlamak amacıyla işlenmektedir."
        },
        {
            "title": "Verilerin Silinmesi",
            "content": "İstediğiniz zaman hesabınızı ve tüm verilerinizi sistemimizden kalıcı olarak silebilirsiniz. Bunun için hesap ayarları bölümünden talepte bulunabilirsiniz."
        },
        {
            "title": "Antrenman ve Sağlık Verileri",
            "content": "Eğer sistemimize antrenman ve sağlık bilgilerinizi girerseniz, bu veriler yalnızca sizin erişiminize açık olur. Bu bilgileri dilediğiniz zaman düzenleyebilir veya silebilirsiniz."
        }
    ]


    return (
        <>
            <Navbar />
            <Container>
                <div className='mt-20'>

                    <div className='flex flex-col gap-5 mb-10'>
                        <div className='text-5xl font-bold w-150'>Merhaba bizi inceleme fırsatı verdiğin için teşekkür ederiz.</div>
                        <p className='text-2xl font-light w-150'>Öncelikle size amacımız ne ve bunu neden yaptığımızı maddeler halinde açıklayacağız</p>
                    </div>

                    <ul className='grid grid-cols-2 gap-10'>
                        {data.map((d, index) => <li key={`$aboutme.{index}.${d.title}`} className='flex flex-col h-full '>
                            <div className='p-3 bg-[#111] text-zinc-200'>{d.title}</div>
                            <p className='p-5 bg-[#202020] h-full text-zinc-300 '>{d.content}</p>
                        </li>)}
                    </ul>
                </div>

                <button className='mt-5 mr-5 p-5 cursor-pointer w-50 text-center text-2xl font-bold bg-white text-black border-b-10 border-b-gray-500 '>İletişim</button>
                <button className='mt-5 mr-5 p-5 cursor-pointer w-50 text-center text-2xl font-bold bg-white text-black border-b-10 border-b-gray-500'>Instagram</button>

            </Container>
            <Footer />
        </>
    )
}

export default About
