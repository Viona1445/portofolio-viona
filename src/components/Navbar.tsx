import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'id' : 'en';
        i18n.changeLanguage(newLang);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: i18n.language === 'en' ? 'Home' : 'Beranda', href: '#home' },
        { name: i18n.language === 'en' ? 'About' : 'Tentang', href: '#about' },
        { name: i18n.language === 'en' ? 'Skills' : 'Keahlian', href: '#skills' },
        { name: i18n.language === 'en' ? 'Projects' : 'Proyek', href: '#projects' },
        { name: i18n.language === 'en' ? 'Contact' : 'Kontak', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-card py-3 shadow-lg' : 'bg-transparent py-5'
                }`}
        >
            {/* Scroll Progress Bar */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-premium-blue origin-left z-10"
                style={{
                    scaleX: scrolled ? (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) : 0
                }}
            />

            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center"
                >
                    {/* Full logo (Desktop) */}
                    <div className="hidden md:block text-2xl font-bold tracking-tighter text-white">
                        VIONA<span className="text-premium-blue text-glow">.</span>
                    </div>
                    {/* Mini logo (Mobile) */}
                    <div className="md:hidden">
                        <img
                            src="/mini-logo.png"
                            alt="Logo"
                            className="h-8 w-auto object-contain"
                        />
                    </div>
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 hover:text-premium-blue transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={toggleLanguage}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors flex items-center space-x-2"
                    >
                        <Globe className="w-4 h-4 text-premium-blue" />
                        <span className="text-xs uppercase font-bold">{i18n.language}</span>
                    </button>
                    <a
                        href="#contact"
                        className="px-6 py-2 bg-premium-blue hover:bg-blue-600 text-white rounded-full text-sm font-semibold premium-glow transition-all hover:scale-105"
                    >
                        {i18n.language === 'en' ? 'Hire Me' : 'Hubungi Saya'}
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center space-x-4">
                    <button onClick={toggleLanguage} className="p-2">
                        <Globe className="w-5 h-5 text-premium-blue" />
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-card border-t border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-slate-300 hover:text-premium-blue"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="w-full py-3 bg-premium-blue text-center text-white rounded-xl font-bold"
                            >
                                {i18n.language === 'en' ? 'Hire Me' : 'Hubungi Saya'}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
