import { useTranslation } from 'react-i18next';
import { cvData } from '../data/cvData';

const Footer = () => {
    const { i18n } = useTranslation();

    return (
        <footer className="py-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                <div className="text-2xl font-bold tracking-tighter text-white mb-6">
                    VIONA<span className="text-premium-pink text-glow">.</span>
                </div>

                <p className="text-slate-500 text-sm mb-8 text-center max-w-md">
                    {i18n.language === 'en'
                        ? "Crafting premium digital experiences with a focus on clean code and interactive design."
                        : "Membangun pengalaman digital premium dengan fokus pada kode yang bersih dan desain interaktif."}
                </p>

                <div className="flex flex-col items-center text-slate-500 text-xs mb-8 gap-2">
                    <span>© {new Date().getFullYear()} {cvData.personalInfo.name}. All rights reserved.</span>
                    <span className="flex items-center gap-1.5 opacity-70">
                        {i18n.language === 'en' ? 'Built with' : 'Dibuat dengan'} 
                        <span className="text-[#61DAFB] font-medium">React</span>, 
                        <span className="text-[#38B2AC] font-medium">Tailwind CSS</span>,
                        {i18n.language === 'en' ? '&' : '&'} 
                        <span className="text-white font-medium">Framer Motion</span>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
