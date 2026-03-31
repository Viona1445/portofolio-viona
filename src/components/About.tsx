import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cvData } from '../data/cvData';
import { Dumbbell, Palette, Utensils, Music } from 'lucide-react';
import { User, Target, Zap, MessageSquare } from 'lucide-react';

const About = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language as 'en' | 'id';

    const strengths = [
        { icon: User, label: cvData.personalInfo.personality[currentLang][0], color: 'text-blue-400' },
        { icon: Target, label: cvData.personalInfo.personality[currentLang][1], color: 'text-purple-400' },
        { icon: Zap, label: cvData.personalInfo.personality[currentLang][2], color: 'text-yellow-400' },
        { icon: MessageSquare, label: cvData.personalInfo.personality[currentLang][3], color: 'text-green-400' },
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        {i18n.language === 'en' ? 'About Me' : 'Tentang Saya'}
                    </motion.h2>
                    <div className="w-20 h-1 bg-premium-pink mx-auto rounded-full" />
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ willChange: 'transform, opacity' }}
                    >
                        <p className="text-xl text-slate-300 leading-relaxed mb-8">
                            {cvData.personalInfo.about[currentLang]}
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {strengths.map((s, idx) => (
                                <div key={idx} className="glass-card p-6 rounded-2xl border border-white/5 hover:border-premium-pink/30 transition-all group">
                                    <s.icon className={`w-8 h-8 ${s.color} mb-3 group-hover:scale-110 transition-transform`} />
                                    <h3 className="text-white font-bold">{s.label}</h3>
                                </div>
                            ))}
                        </div>

                        {/* Active Leadership Section */}
                        <div className="glass-card p-8 rounded-3xl border border-white/10 mt-8">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                {i18n.language === 'en' ? 'Active Leadership' : 'Pengalaman Organisasi'}
                            </h3>
                            {cvData.organizations.map((org, idx) => (
                                <div key={idx} className="mb-6 last:mb-0 pb-6 last:pb-0 border-b border-white/5 last:border-0 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
                                    <div>
                                        <h4 className="text-lg font-bold text-white group-hover:text-premium-pink transition-colors leading-tight">{org.name}</h4>
                                        <p className="text-premium-pink text-[10px] font-bold mt-1 uppercase tracking-widest">{org.role}</p>
                                    </div>
                                    <span className="text-xs font-semibold text-slate-500 whitespace-nowrap mt-1 sm:mt-0">{org.period}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ willChange: 'transform, opacity' }}
                        className="relative"
                    >
                        <div className="glass-card p-8 rounded-3xl border border-white/10 mb-8">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                {i18n.language === 'en' ? 'Education' : 'Pendidikan'}
                            </h3>
                            {cvData.education.map((edu, idx) => (
                                <div key={idx} className="mb-8 last:mb-0">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-lg font-bold text-premium-glow">{edu.school}</h4>
                                        <span className="text-sm text-slate-500">{edu.period}</span>
                                    </div>
                                    <p className="text-white font-medium mb-1">{edu.major}</p>
                                    <div className="flex items-center space-x-2">
                                        <span className="px-2 py-0.5 bg-premium-pink/20 text-premium-pink text-xs font-bold rounded">GPA {edu.gpa}</span>
                                        <span className="text-slate-500 text-xs">{edu.location}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Hobbies Section */}
                        <div className="glass-card p-8 rounded-3xl border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                {i18n.language === 'en' ? 'Lifestyle & Hobbies' : 'Gaya Hidup & Hobi'}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {cvData.personalInfo.hobbies.map((hobby, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -5 }}
                                        className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-premium-pink/30 transition-all"
                                    >
                                        <div className="w-12 h-12 bg-premium-pink/10 rounded-full flex items-center justify-center mb-3 text-premium-pink">
                                            {hobby.icon === 'Dumbbell' ? <Dumbbell className="w-6 h-6" /> :
                                                hobby.icon === 'Palette' ? <Palette className="w-6 h-6" /> :
                                                    hobby.icon === 'Utensils' ? <Utensils className="w-6 h-6" /> : <Music className="w-6 h-6" />}
                                        </div>
                                        <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider text-center">{hobby.name[currentLang]}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Dance Photo */}
                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="mt-8 rounded-3xl overflow-hidden glass-card border border-white/10 relative group h-48 sm:h-64"
                        >
                            <img src="/nari.png" alt="Traditional Dance" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/10 to-transparent flex flex-col justify-end p-6">
                                <h4 className="text-white font-bold text-lg leading-tight mb-1">
                                    {i18n.language === 'en' ? 'Traditional Dance' : 'Tari Tradisional'}
                                </h4>
                                <p className="text-premium-pink text-xs font-bold uppercase tracking-widest">
                                    {i18n.language === 'en' ? 'Passionate Performer' : 'Penari Aktif'}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
