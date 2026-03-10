import { useTranslation } from 'react-i18next';
import { cvData } from '../data/cvData';

const Footer = () => {
    const { i18n } = useTranslation();

    return (
        <footer className="py-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                <div className="text-2xl font-bold tracking-tighter text-white mb-6">
                    VIONA<span className="text-premium-blue text-glow">.</span>
                </div>

                <p className="text-slate-500 text-sm mb-8 text-center max-w-md">
                    {i18n.language === 'en'
                        ? "Crafting premium digital experiences with a focus on clean code and interactive design."
                        : "Membangun pengalaman digital premium dengan fokus pada kode yang bersih dan desain interaktif."}
                </p>

                <div className="flex items-center text-slate-500 text-xs mb-8">
                    <span>© {new Date().getFullYear()} {cvData.personalInfo.name}. All rights reserved.</span>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
