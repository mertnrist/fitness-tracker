import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Container from '../../components/shared/Container'
import Button from '../../components/shared/Button'
import { IoMailOutline } from 'react-icons/io5'

const About = () => {
    const data = [
        {
            "title": "Amacımız",
            "content": "Spor yapan bireyleri bir arada bulundurarak kendi gelişimlerini takip etmelerini sağlıyoruz. İnternet üzerinde birçok kaynak olmasına rağmen hepsinin bir arada olmasının iyi olacağını düşündük ve sizlere bu hizmeti ücretsiz sunuyoruz.",
            "icon": "🎯"
        },
        {
            "title": "Neden ücretsiz",
            "content": "Aslında bu projenin ücretli olması için bir sebep bulunmuyor. Büyük gideri bulunan bir proje de değil. Hiçbir zaman sizden para talep etmeyeceğiz.",
            "icon": "💝"
        },
        {
            "title": "Güvenli mi",
            "content": "Bilgilerinizi asla ve asla 3. tarafla paylaşmıyoruz. Kendiniz sistem üzerinden paylaşmak isterseniz, örneğin; antrenman programınız ve kendi formlarınızı paylaşabilirsiniz.",
            "icon": "🔒"
        },
        {
            "title": "KVKK ve Gizlilik Politikamız",
            "content": "Kişisel verilerinizi gizlilik çerçevesinde saklıyoruz ve hiçbir şekilde 3. şahıslarla paylaşmıyoruz. KVKK kapsamında verileriniz üzerinde tam kontrole sahipsiniz ve dilediğiniz zaman silme veya değiştirme talebinde bulunabilirsiniz.",
            "icon": "📜"
        },
        {
            "title": "Toplanan Veriler",
            "content": "Sadece üyelik oluşturma, antrenman takibi ve performans analizi için gerekli temel bilgileri topluyoruz. Bunlar adınız, e-posta adresiniz ve isteğe bağlı olarak spor geçmişiniz olabilir.",
            "icon": "📊"
        },
        {
            "title": "Veri Kullanımı",
            "content": "Verileriniz yalnızca size daha iyi bir spor deneyimi sunmak için kullanılacaktır. İstatistikler, kişiselleştirilmiş öneriler ve gelişim analizleri sağlamak amacıyla işlenmektedir.",
            "icon": "⚡"
        },
        {
            "title": "Verilerin Silinmesi",
            "content": "İstediğiniz zaman hesabınızı ve tüm verilerinizi sistemimizden kalıcı olarak silebilirsiniz. Bunun için hesap ayarları bölümünden talepte bulunabilirsiniz.",
            "icon": "🗑️"
        },
        {
            "title": "Antrenman ve Sağlık Verileri",
            "content": "Eğer sistemimize antrenman ve sağlık bilgilerinizi girerseniz, bu veriler yalnızca sizin erişiminize açık olur. Bu bilgileri dilediğiniz zaman düzenleyebilir veya silebilirsiniz.",
            "icon": "💪"
        }
    ]

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <Container>
                <div className="py-20 space-y-20">
                    <div className="max-w-4xl mx-auto text-center space-y-6 px-4">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent leading-tight">
                            Merhaba, bizi inceleme fırsatı verdiğin için teşekkür ederiz
                        </h1>
                        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                            Öncelikle size amacımız ne ve bunu neden yaptığımızı detaylı olarak açıklayalım
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                        {data.map((item, index) => (
                            <div
                                key={`about-${index}-${item.title}`}
                                className="group bg-zinc-800/50 rounded-xl overflow-hidden hover:bg-zinc-800/80 transition-all duration-300"
                            >
                                <div className="p-6 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">{item.icon}</span>
                                        <h3 className="text-xl font-semibold text-white group-hover:text-amber-500 transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-zinc-400 leading-relaxed">
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-2xl mx-auto text-center space-y-10 px-4">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-semibold text-white">
                                Bizimle İletişime Geçin
                            </h2>
                            <p className="text-zinc-400 text-lg">
                                Sorularınız, önerileriniz veya işbirliği teklifleriniz için bize ulaşabilirsiniz.
                            </p>
                        </div>

                        <Button
                            className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 w-full max-w-xs mx-auto py-3"
                        >
                            <IoMailOutline className="text-xl" />
                            <span>E-posta</span>
                        </Button>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default About
