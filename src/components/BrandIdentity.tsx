import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cvData } from '../data/cvData';
import { PenTool } from 'lucide-react';

const BrandIdentity = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language as 'en' | 'id';

    return (
        <section id="brand-identity" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        {i18n.language === 'en' ? 'Brand Identity' : 'Identitas Merek'}
                    </motion.h2>
                    <div className="w-20 h-1 bg-premium-blue mx-auto rounded-full mb-6" />
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        {i18n.language === 'en'
                            ? "A collection of logo designs I've crafted using Figma, focusing on minimalism, meaning, and modern aesthetics."
                            : "Koleksi desain logo yang saya buat menggunakan Figma, berfokus pada minimalisme, makna, dan estetika modern."}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cvData.logos.map((logo, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            whileHover={{
                                scale: 1.02,
                                rotateX: 2,
                                rotateY: idx % 2 === 0 ? -2 : 2,
                                transition: { duration: 0.3 }
                            }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group perspective-1000"
                        >
                            <div className="glass-card p-8 rounded-[32px] border border-white/5 hover:border-premium-blue/30 transition-all duration-500 h-full flex flex-col items-center hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]">
                                <div className="w-full aspect-square bg-navy-900/50 rounded-2xl flex items-center justify-center mb-6 overflow-hidden p-6 border border-white/5 group-hover:border-premium-blue/20 transition-all">
                                    <motion.img
                                        whileHover={{ scale: 1.15 }}
                                        src={logo.image}
                                        alt={logo.name}
                                        className="max-w-full max-h-full object-contain filter drop-shadow-2xl"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-premium-blue transition-colors">{logo.name}</h3>
                                <p className="text-slate-400 text-xs text-center leading-relaxed mb-4">
                                    {logo.description[currentLang]}
                                </p>
                                <div className="mt-auto pt-4 flex items-center justify-center space-x-2 text-[10px] font-bold text-premium-blue uppercase tracking-widest opacity-60">
                                    <PenTool className="w-3 h-3" />
                                    <span>Crafted in Figma</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandIdentity;
