import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cvData } from '../data/cvData';
import { Calendar, MapPin, X } from 'lucide-react';
import { useState } from 'react';

const Experience = () => {
    const { i18n } = useTranslation();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const currentLang = i18n.language as 'en' | 'id';

    return (
        <section id="experience" className="py-24 bg-navy-950/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        {i18n.language === 'en' ? 'Professional Journey' : 'Perjalanan Karir'}
                    </motion.h2>
                    <div className="w-20 h-1 bg-premium-blue mx-auto rounded-full" />
                </div>

                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/5 md:-translate-x-1/2" />

                    {cvData.experience.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`relative mb-12 md:mb-16 w-full flex items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-premium-blue rounded-full z-10 -translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.6)] border-4 border-navy-950" />

                            {/* Content Card container */}
                            <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/5 hover:border-premium-blue/30 transition-all hover:shadow-2xl">
                                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                        <span className="px-4 py-1.5 bg-premium-blue/10 text-premium-blue text-[10px] font-bold rounded-lg uppercase tracking-widest border border-premium-blue/20">
                                            {exp.role}
                                        </span>
                                        <div className="flex items-center text-slate-500 text-xs">
                                            <Calendar className="w-3.5 h-3.5 mr-2" />
                                            {exp.period}
                                        </div>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-premium-blue transition-colors">
                                        {exp.company}
                                    </h3>
                                    <div className="flex items-center text-slate-400 text-xs mb-6">
                                        <MapPin className="w-3.5 h-3.5 mr-2" />
                                        {exp.location}
                                    </div>

                                    <ul className="space-y-3">
                                        {(exp.highlights[currentLang] || exp.highlights['en']).map((item, i) => (
                                            <li key={i} className="flex items-start text-slate-300 text-sm leading-relaxed">
                                                <span className="w-1.5 h-1.5 bg-premium-blue rounded-full mt-2 mr-3 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    {exp.proof && (
                                        <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                                            <a
                                                href={exp.proof}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center space-x-2 text-[10px] font-bold text-premium-blue hover:text-white transition-colors group/link uppercase tracking-wider"
                                            >
                                                <span className="px-4 py-2 bg-premium-blue/5 rounded-xl group-hover/link:bg-premium-blue/20 transition-all border border-premium-blue/10 group-hover/link:border-premium-blue/30">
                                                    {currentLang === 'en' ? 'View Activity' : 'Lihat Aktivitas'}
                                                </span>
                                            </a>
                                        </div>
                                    )}

                                    {/* Career Moments Gallery - Auto-scroll Marquee */}
                                    {(exp as any).moments && (exp as any).moments.length > 0 && (
                                        <div className="mt-8 overflow-hidden">
                                            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center">
                                                <span className="w-8 h-px bg-white/10 mr-3" />
                                                {currentLang === 'en' ? 'Career Moments' : 'Momen Berharga'}
                                            </h4>

                                            <div className="relative group/gallery">
                                                <motion.div
                                                    className="flex gap-4 w-max will-change-transform"
                                                    animate={{
                                                        x: [0, -((exp as any).moments.length * 144)],
                                                    }}
                                                    transition={{
                                                        duration: (exp as any).moments.length * 8, // Slower for smoother feel
                                                        repeat: Infinity,
                                                        ease: "linear",
                                                    }}
                                                >
                                                    {/* Duplicate images for seamless loop */}
                                                    {[...(exp as any).moments, ...(exp as any).moments].map((img: string, i: number) => (
                                                        <div
                                                            key={i}
                                                            onClick={() => setSelectedImage(img)}
                                                            className="relative flex-shrink-0 w-32 h-44 rounded-2xl overflow-hidden border border-white/5 shadow-lg group/img cursor-pointer"
                                                        >
                                                            <img
                                                                src={img}
                                                                alt={`Moment ${i}`}
                                                                className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                                                                loading="lazy"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />
                                                        </div>
                                                    ))}
                                                </motion.div>

                                                {/* Gradient Fades for Smooth Edges */}
                                                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-navy-900/80 to-transparent z-10 pointer-events-none" />
                                                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-navy-900/80 to-transparent z-10 pointer-events-none" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Empty space for the other side */}
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] bg-navy-950/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
                    >
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-[110]"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-6 h-6" />
                        </motion.button>

                        <motion.img
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            src={selectedImage}
                            alt="Full Screen Moment"
                            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Experience;
