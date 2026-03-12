import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cvData } from '../data/cvData';
import { Code2, PenTool, Lightbulb, Smartphone, Database } from 'lucide-react';

const Skills = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language as 'en' | 'id';

    const skillGroups = cvData.skills.categories.map((cat, idx) => ({
        title: cat.name[currentLang],
        icon: [Code2, Smartphone, Database, PenTool][idx % 4],
        items: cat.skills,
        color: [
            'from-blue-600 to-cyan-500',
            'from-purple-600 to-pink-500',
            'from-emerald-600 to-teal-500',
            'from-orange-600 to-yellow-500'
        ][idx % 4]
    }));

    // Add Soft Skills as a group
    skillGroups.push({
        title: currentLang === 'en' ? 'Soft Skills' : 'Keahlian Intrapersonal',
        icon: Lightbulb,
        items: cvData.skills.soft[currentLang],
        color: 'from-amber-500 to-orange-400'
    });

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
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-all"
                        >
                            <div className="flex items-center gap-4 mb-5">
                                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center shadow-lg shrink-0`}>
                                    <group.icon className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-sm font-bold text-white uppercase tracking-wider">{group.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1.5 bg-navy-900/50 text-slate-400 text-xs font-medium rounded-lg border border-white/5"
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
