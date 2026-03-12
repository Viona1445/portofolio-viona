import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Download, Mail } from 'lucide-react';
import { cvData } from '../data/cvData';

const Hero = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language as 'en' | 'id';

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-premium-blue/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-900/20 rounded-full blur-[150px] animate-pulse delay-700" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-premium-blue/5 rounded-full blur-[180px] pointer-events-none" />

            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/20 rounded-full hidden md:block"
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                    }}
                    transition={{
                        duration: 5 + Math.random() * 5,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                    }}
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                />
            ))}

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block py-1 px-4 rounded-full bg-premium-blue/10 border border-premium-blue/20 text-premium-blue text-sm font-bold mb-6"
                    >
                        {i18n.language === 'en' ? 'Available for Work' : 'Tersedia untuk Pekerjaan'}
                    </motion.span>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                        {cvData.personalInfo.name}
                    </h1>

                    <h2 className="text-xl md:text-2xl text-premium-glow font-medium mb-8">
                        {cvData.personalInfo.title[currentLang]}
                    </h2>

                    <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
                        {cvData.personalInfo.about[currentLang]}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4 mb-8">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="bg-premium-blue text-white px-8 py-4 rounded-2xl font-bold shadow-lg premium-glow flex items-center space-x-2"
                        >
                            <Mail className="w-5 h-5" />
                            <span>{i18n.language === 'en' ? 'Hire Me' : 'Hubungi Saya'}</span>
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/2026_CV_VIONA_ASYA_ARINDA.pdf"
                            download
                            className="glass-card text-white px-8 py-4 rounded-2xl font-bold border border-white/10 hover:border-premium-blue/50 transition-all flex items-center space-x-2"
                        >
                            <Download className="w-5 h-5 text-premium-blue" />
                            <span>{i18n.language === 'en' ? 'Download CV' : 'Unduh CV'}</span>
                        </motion.a>
                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
                        {/* Elegant Border Ring */}
                        <div className="absolute inset-0 border-2 border-premium-blue/30 rounded-[40px] rotate-6 scale-105 animate-[spin_20s_linear_infinite]" />
                        <div className="absolute inset-0 border-2 border-white/10 rounded-[40px] -rotate-3 scale-105" />

                        <div className="relative w-full h-full rounded-[40px] overflow-hidden border-2 border-white/10 premium-glow">
                            <img
                                src="/viona.png"
                                alt={cvData.personalInfo.name}
                                className="w-full h-full object-cover"
                                onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/600x600?text=Viona+Asya+Arinda' }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
