import { Link } from 'react-router-dom';
import { IoAccessibility } from 'react-icons/io5';
import Container from './shared/Container';

const Footer = () => {
    return (
        <footer className="relative">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[url('/patterns/dumbbell-pattern.svg')] bg-repeat"></div>
            </div>
            <div className="relative border-t border-zinc-800 pt-16 pb-8">
                <Container>
                    <div className="container mx-auto px-4">
                        {/* Main Footer Content */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                            {/* Brand Section */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <IoAccessibility className="text-3xl text-amber-500" />
                                    <h2 className="text-2xl font-bold">Kişisel Takibim</h2>
                                </div>
                                <p className="text-zinc-400 leading-relaxed">
                                    Sen de kendini geliştirmek için bizimle birlikte bu serüvene katıl.
                                </p>
                            </div>

                            {/* Quick Links */}
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link to="/" className="text-zinc-400 hover:text-amber-500 transition-colors flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                                            Anasayfa
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/hakkimizda" className="text-zinc-400 hover:text-amber-500 transition-colors flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                                            Hakkımızda
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/profil" className="text-zinc-400 hover:text-amber-500 transition-colors flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                                            Profilim
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Copyright */}

                    </div>
                </Container>
                <div className="border-t border-zinc-800 pt-8 text-center text-zinc-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Kişisel Takibim. Tüm hakları saklıdır.</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
