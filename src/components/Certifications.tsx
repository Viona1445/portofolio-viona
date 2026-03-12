import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cvData } from '../data/cvData';
import { Award, Smartphone, Globe } from 'lucide-react';

const Certifications = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language as 'en' | 'id';

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'Award': return <Award className="w-6 h-6" />;
            case 'Smartphone': return <Smartphone className="w-6 h-6" />;
            case 'Globe': return <Globe className="w-6 h-6" />;
            default: return <Award className="w-6 h-6" />;
        }
    };

    return (
        <section id="certifications" className="py-24 bg-navy-950/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Certifications Side */}
                    <div className="flex-1">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-white mb-8"
                        >
                            {currentLang === 'en' ? 'Certifications' : 'Sertifikasi'}
                        </motion.h2>
                        <div className="space-y-4">
                            {cvData.certificates.map((cert, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="glass-card p-6 rounded-2xl border border-white/5 flex items-center gap-6 hover:bg-white/10 transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-premium-blue/20 flex items-center justify-center text-premium-blue shrink-0">
                                        {getIcon(cert.icon)}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">{cert.name}</h3>
                                        <p className="text-slate-400 text-sm mt-1">{cert.issuer} • {cert.date}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements Side */}
                    <div className="flex-1">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-white mb-8"
                        >
                            {currentLang === 'en' ? 'Key Achievements' : 'Pencapaian Utama'}
                        </motion.h2>
                        <div className="grid gap-6">
                            {cvData.achievements.map((ach, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="p-8 rounded-3xl bg-gradient-to-br from-navy-900 to-navy-950 border border-white/5 relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <Award size={80} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-premium-blue mb-2">{ach.title[currentLang]}</h3>
                                    <p className="text-slate-400 leading-relaxed">{ach.description[currentLang]}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
