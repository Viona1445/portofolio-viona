import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cvData } from '../data/cvData';
import { Code2, PenTool, Lightbulb } from 'lucide-react';

const Skills = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language as 'en' | 'id';

    const skillGroups = [
        {
            title: i18n.language === 'en' ? 'Technical Skills' : 'Keahlian Teknis',
            icon: Code2,
            items: cvData.skills.technical,
            color: 'from-blue-600 to-cyan-500'
        },
        {
            title: i18n.language === 'en' ? 'Tools & Platforms' : 'Peralatan & Platform',
            icon: PenTool,
            items: cvData.skills.tools,
            color: 'from-purple-600 to-pink-500'
        },
        {
            title: i18n.language === 'en' ? 'Soft Skills' : 'Keahlian Intrapersonal',
            icon: Lightbulb,
            items: cvData.skills.soft[currentLang],
            color: 'from-orange-600 to-yellow-500'
        },
    ];

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        {i18n.language === 'en' ? 'My Toolkit' : 'Keahlian Saya'}
                    </motion.h2>
                    <div className="w-20 h-1 bg-premium-blue mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillGroups.map((group, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="glass-card p-8 rounded-3xl border border-white/5"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${group.color} flex items-center justify-center mb-6 shadow-xl`}>
                                <group.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-sm">{group.title}</h3>
                            <div className="flex flex-wrap gap-3">
                                {group.items.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 bg-white/5 hover:bg-premium-blue/20 hover:text-white text-slate-400 text-sm font-medium rounded-xl transition-all border border-white/5"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
